'use strict';

exports.build = function(config, callback) {
    var Y = require('yuidocjs'),
        fs = require("fs"),
        path = require('path'),
        demoBuilder,
        stat = fs.stat,
        basePath = path.dirname(fs.realpathSync(__filename)),
        themeDir,
        shelljs = require('shelljs'),
        pkg = require(fs.realpathSync('.') + '/package.json');
    // 检查项目的package.json 的信息
    if(!pkg){
        console.error('the project package.json files not exits.')
        pkg = {
            version: '1.0.0'
        }
    }
    Y.Handlebars.registerHelper('ifCond', function (v1, operator, v2, options) {

        switch (operator) {
            case '==':
                return (v1 == v2) ? options.fn(this) : options.inverse(this);
            case '===':
                return (v1 === v2) ? options.fn(this) : options.inverse(this);
            case '<':
                return (v1 < v2) ? options.fn(this) : options.inverse(this);
            case '<=':
                return (v1 <= v2) ? options.fn(this) : options.inverse(this);
            case '>':
                return (v1 > v2) ? options.fn(this) : options.inverse(this);
            case '>=':
                return (v1 >= v2) ? options.fn(this) : options.inverse(this);
            case '&&':
                return (v1 && v2) ? options.fn(this) : options.inverse(this);
            case '||':
                return (v1 || v2) ? options.fn(this) : options.inverse(this);
            default:
                return options.inverse(this);
        }
    });
    Y.Handlebars.registerHelper('getValueByIndex', function (arr,index) {
        return arr && arr.length ? arr[index]:'';
    });

    var defaultThemes = {
        'default': basePath + '/theme/',
        'ui': basePath + '/theme-ui/'
    };

    extendYUIDoc();

    buildDoc(getOptions());

    function getOptions() {
        if (config) {
            return config;
        }
        // 重新组装项目的配置信息
        var docConfig = require(fs.realpathSync('.') + '/docConfig.js');
        docConfig.rootOutdir = docConfig.outdir || 'doc/'
        //  TODO 根据版本号命名
        docConfig.outdir = (docConfig.outdir|| 'doc/') + 'doc_' +pkg.version + '/';
        // 设置页面变量
        docConfig.project.docVersion = pkg.version;
        // 提前创建好目录，防止报错
        shelljs.mkdir('-p', docConfig.outdir);
        return docConfig;
    }

    function buildDoc(options) {
        var json;

        if (!options) {
            console.log('The Options of smartDoc is not be defined!');
            return;
        }

        //混入默认设置
        config = options = Y.mix(options, {
            //代码扫描路径
            paths: ['src/'],
            //文档输出文件夹
            outdir: 'doc/',
            theme: 'default',
            //主题目录
            //themedir: themeDir,
            //辅助js文件地址
            //helpers: [themeDir + "helpers/helpers.js"],
            //demo扫描目录
            demoDir: "",
            //demo生成器地址
            demoBuilder: './demoBuilder.js',
            //demo代码生成器地址
            codeLoader: './jasmineLoader.js'
        });

        // 设置版本号数据
        config.project.versions = getVersionsConf();
        //主题判断
        if (config.themedir) {
             themeDir = config.themedir;
        } else {
            //判断是否默认主题
            themeDir = config.themedir = defaultThemes[config.theme] || defaultThemes['default'];
        }

        if (!config.helpers)
            config.helpers = [themeDir + "helpers/helpers.js"];
           
        demoBuilder = require(config.demoBuilder);

        try {
            json = (new Y.YUIDoc(options)).run();
        } catch (e) {
            console.log(e);
            return;
        }
        options = Y.Project.mix(json, options);
        
        var builder = new Y.DocBuilder(options, json);

        var starttime = Date.now();
        console.log('Start SmartDoc compile...');
        console.log('Scanning: ' + options.paths);
        console.log('Output: ' + options.outdir);

        builder.compile(function() {
            buildDocConfig(builder.data, builder._meta, options);

            builder.writeDemo(function() {
                callback && callback();
                console.log('SmartDoc compile completed in ' + ((Date.now() - starttime) / 1000) + ' seconds');
            });
        });
    }

    function buildDocConfig(data, meta, options) {
        var items = [];
        
        Y.each(data.modules, function(item) {
            item.name && items.push({
                type: 'module',
                name: item.name
            });
        });

        Y.each(data.classes, function(item) {
            item.name && items.push({
                type: 'class',
                name: item.name
            });
        })

        data.classitems.forEach(function(item) {
            item.name && items.push({
                type: item.itemtype,
                className: item['class'],
                name: item.name
            });
        })

        var config = {
            filterItems: items
        }

        fs.appendFileSync(options.outdir + 'assets/js/config.js', "window['__docConfig'] = " + JSON.stringify(config) + ";");
    }

    function extendYUIDoc() {
        //重新模块生成
        Y.DocBuilder.prototype.populateModules = function(opts) {
            var self = this;
            opts.meta.modules = [];
            opts.meta.allModules = [];

            Y.each(this.data.modules, function(v) {
                if (v.external) {
                    return;
                }

                var classes = [];

                for (var cName in v.classes) {
                    classes.push({
                        name: cName
                    });
                }

                opts.meta.allModules.push({
                    displayName: v.displayName || v.name,
                    name: self.filterFileName(v.name),
                    description: v.description,
                    classes: classes.length ? classes : null
                });

                if (!v.is_submodule) {
                    var o = {
                        displayName: v.displayName || v.name,
                        name: self.filterFileName(v.name),
                        classes: classes.length ? classes : null
                    };
                    if (v.submodules) {
                        o.submodules = [];
                        Y.each(v.submodules, function(i, k) {
                            var moddef = self.data.modules[k];
                            if (moddef) {
                                o.submodules.push({
                                    displayName: k,
                                    description: moddef.description
                                });
                                // } else {
                                //     Y.log('Submodule data missing: ' + k + ' for ' + v.name, 'warn', 'builder');
                            }
                        });
                        o.submodules.sort(self.nameSort);
                    }
                    opts.meta.modules.push(o);
                }
            });
            opts.meta.modules.sort(this.nameSort);
            opts.meta.allModules.sort(this.nameSort);
            return opts;
        }

        //添加demo写入功能
        Y.DocBuilder.prototype.writeDemo = function(cb) {
            var self = this,
                stack = new Y.Parallel();

            Y.log('Preparing demo.html', 'info', 'builder');

            render(self, stack.add(function(html, view) {
                stack.html = html;
                stack.view = view;
                Y.Files.writeFile(path.join(self.options.outdir + 'assets/', 'demo.html'), html, stack.add(function() {}));
                Y.Files.writeFile(path.join(self.options.outdir + 'assets/', 'show.html'), html + "<script src='js/show.js'></script>", stack.add(function() {}));
            }));

            stack.done(function(html, view) {
                Y.log('Writing demo.html', 'info', 'builder');
                cb(stack.html, stack.view);
            });
        }

        extendYUIBuilder();
    }

    function extendYUIBuilder(){
        var _parseCode =  Y.DocBuilder.prototype._parseCode;

        Y.DocBuilder.prototype._parseCode = function(html){
            return '<div class="stdoc-code">' + _parseCode.call(this,html) + "</div>";
        }

        //扩展demo标签处理
        Y.DocParser.DIGESTERS.demo = function(tagname, value, target, block) {
            var content = target["example"],
                urls = target['exampleUrls'],
                data,titles = target["exampleTitles"];

            if(!content)
                content = target["example"] = [];

            if(!titles)
                titles = target["exampleTitles"] = [];
            if(!urls)
                urls = target['exampleUrls']=[];


            if (value) {
                var v = [];
                if(value.indexOf('|')>=0 ){
                    v= value.split('|');
                    if(config.demoUrl){
                        v[0] = config.demoUrl+v[0];
                    }
                }else{
                    v = ['',value];
                }
                var data = demoBuilder.build(v[1], config, target);
                if(data && data.code){
                    urls.push(v[0]);
                    content.push(data.code);
                    titles.push(data.title);
                    target['isApp'] = config.project.isApp;
                }
            }
        }

        //扩展demo标签处理
        Y.DocParser.DIGESTERS.show = function(tagname, value, target, block) {
            target["show"] = true;
        }
    }

    function isJS(file) {
        return path.extname(file) === '.js';
    }

    function isCss(file) {
        return path.extname(file) === '.css';
    }

    function render(builder, cb) {
        Y.prepare([themeDir, themeDir], builder.getProjectMeta(), function(err, opts) {
            var css = [],
                script = [],
                demo = builder.options.demo;

            function addRes(res) {
                if (isJS(res)) {
                    script.push(res);
                } else if (isCss(res)) {
                    css.push(res);
                } else
                    return false;
                return true;
            }

            if (demo) {
                demo.link && demo.link.forEach(addRes)

                if (demo.paths) {
                    var resPath = builder.options.outdir + 'assets/res';
                    fs.mkdirSync(resPath);
                    demo.paths.forEach(function(item) {
                        if (item.charAt(item.length - 1) === '/') {
                            copyDir(addRes, item, resPath);
                        } else {
                            copyRes(addRes, path.basename(item), item, resPath);
                        }
                    })
                }

                if (demo.autoComplete !== false && script.length) {
                    fs.appendFile(builder.options.outdir + 'assets/code.html', '<script src="' + script.join('"></script><script src="') + '"></script>');
                }
            }

            opts.meta.css = css;
            opts.meta.script = script;

            var view = new Y.DocView(opts.meta);

            var tmplFn = Y.Handlebars.compile(opts.layouts.demo);
            html = tmplFn(view);
            builder.files++;
            cb(html, view);
        });
    }

    function copyDir(addRes, src, dst) {
         if (!fs.existsSync(src))
        {
            console.error("demo加载目录不存在：" + src);
            return;
        }
        if (!fs.existsSync(dst))
            fs.mkdirSync(dst);

        // 读取目录中的所有文件/目录
        var paths = fs.readdirSync(src);

        paths.forEach(function(fileName) {
            copyRes(addRes, fileName, src + (src.lastIndexOf('/')>=0?'':'/') + fileName, dst)
        });

    }

    function copyRes(addRes, fileName, src, dst) {
         if (!fs.existsSync(src))
        {
            console.error("demo加载文件不存在：" + src);
            return;
        }

        if (addRes('res/' + fileName)) {

            var _dst = dst + '/' + fileName,
                readable, writable;

            stat(src, function(err, st) {
                if (err) {
                    throw err;
                }

                // 判断是否为文件
                if (st.isFile()) {
                    // 创建读取流
                    readable = fs.createReadStream(src);
                    // 创建写入流
                    writable = fs.createWriteStream(_dst);
                    // 通过管道来传输流
                    readable.pipe(writable);
                    addRes('res/' + fileName);
                }
                // 如果是目录则递归调用自身
                else if (st.isDirectory()) {
                    copyDir(addRes, src, _dst);
                }
            });
        }

    }

    // 同时写一份 versions.js 文件记录版本信息
    function getVersionsConf(){
        var data = []
        // 扫描文档路径，获取各个版本的文档地址
        fs.readdirSync(config.rootOutdir).forEach(function(file){
            if(['doc_' +pkg.version, 'index.html', 'versions.js'].indexOf(file) == -1){
                var d = require(fs.realpathSync('.') + path.join('/', config.rootOutdir, file, 'data.json'))
                if(d && d.project){
                    data.push({
                        name: d.project.name,
                        url: file + '/index.html', // TODO
                        version:'v '+ d.project.docVersion 
                    })
                }
            }
        })
        data.push({
            name: pkg.name,
            url: 'doc_' + pkg.version + '/index.html',
            version: 'v ' + pkg.version
        })
        fs.writeFileSync(config.rootOutdir + 'versions.js', "window['__versionConfig'] = " + JSON.stringify(data) + ";");
        fs.writeFileSync(config.rootOutdir + 'index.html', '<!DOCTYPE html>'+
            '<html lang="en">'+
            '<head>'+
            '<meta charset="UTF-8">'+
            '<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
            '<meta http-equiv="X-UA-Compatible" content="ie=edge">'+
            '<title>Redirect</title>'+
            '</head>'+
            '<body></body>'+
            '<script src="./versions.js"></script>'+
            '<script>'+
            'var firstItem = window.__versionConfig[0];'+
            'window.location.href = firstItem.url;'+
            '</script>'+
            '</html>');
        return data;
    }
};
