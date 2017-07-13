module.exports = {
    //扫描的文件路径
    paths: ['input/code/'],
    //配置demo链接
    demoUrl: 'http://172.24.101.249:8000/input/demo/',
    demoDir: "input/demo/",
    //文档页面输出路径
    outdir: 'doc/',
    //内置主题
    // theme:'ui',
    //自定义主题目录
    //themedir: 'theme-smart-ui/',
    //项目信息配置
    project: {
        //项目名称
        name: '商家线UI库',
        //项目描述，可以配置html，会生成到document主页
        description: 'phonix-ui',
        //是否是移动设备平台
        isApp: true,
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
        paths: ['input/code/ui/uicode.js'],
        link: ['http://code.jquery.com/jquery-1.11.0.min.js']
    }
};

