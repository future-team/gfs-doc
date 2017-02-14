gfs-doc
======================

基于YUIDoc构建的Javascipt文档生成器，二次开发改造。 

详细介绍见原作者博客: [JS文档和Demo自动化生成工具 - SmartDoc](http://www.cnblogs.com/zhh8077/p/4010991.html)和[注释编写说明](http://www.cnblogs.com/zhh8077/p/4011769.html)

特性 
--------------------
    * 加入@demo配置项，看可以动态抓取html和js的内容作为@example，同时支持扩展@demo读取；支持@demo demo示例展示链接|demo源代码链接 写法
    * 支持jasmine测试js文件的单元代码抓取为@example
    * 实现多个example显示和tab切换
    * 加入@show配置项来控制直接显示example效果
    * 主题改版
    * 去除@attribute属性设置，统一使用@property

使用
--------------------
在目录中加入docConfig.js文件

    npm install -g gfs-doc
    gfsdoc


docConfig配置项说明
---------------------

    module.exports = {
        //扫描的文件路径
        paths: ['input/code/'],
        //配置demo链接
        demoUrl:'http://172.24.101.249:8000/input/demo/',
        demoDir:"input/demo/",
        //文档页面输出路径
        outdir: 'doc/',
        //内置主题
        // theme:'ui',
        //自定义主题目录
        //themedir: 'theme-smart-ui/',
        //项目信息配置
        project: {
            //项目名称
            name: 'gfsdoc',
            //项目描述，可以配置html，会生成到document主页
            //description: '<h2>SmartDoc</h2> <p>Javascript Document builder base on YUIDoc.</p>',
            //是否是移动设备平台
            isApp:true,
            //版本信息
            version: '1.1.0',
            //是否隐藏defined in 注解(代码定义于第几行)
            //hideFoundAt:'true',
            //是否禁止每个class里的methods、properties、events表格
            //hideClassItemTable:'true',
            //是否隐藏tab栏
            //hideTabItemList:'true',
            //hideViewDemo:'true',
            //hideEditCode:'true',
            //设置默认active的tab，不设置的话默认激活detail tab
            //activeTab:'method',
            //地址信息
            url: 'https://github.com/future-team',
            //主页面插入的js
            //scripts:['uicode.js'],
            //导航信息
            navs: [{
                name: "首页",
                url: "https://github.com/future-team"
            }, {
                name: "文档",
                url: "index.html"
            }, {
                name: "关于",
                url: "http://uedfamily.com/about/"
            }]
        },
        //demo页面需要加载的js库
        demo: {
            paths : ['input/code/ui/uicode.js'],
            link : ['http://code.jquery.com/jquery-1.11.0.min.js'] 
        }
    };
    

其他使用见 [YUIDoc](http://yui.github.com/yuidoc/)



例子使用说明
------------------
将代码下载后，运行

    npm install
    node test.js


程序会将input/目录下的js扫描，将Document生成到doc/目录下,运行doc/index.html,即可访问生成的文档。


注意：生成后的代码编辑页面需要发布到服务器才能正常运行；

[API地址](http://zhh77.github.io/smartjs/)
