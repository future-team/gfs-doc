module.exports = [
    /**
     * Infos
     */
    'getUserInfo', 'getVersion', 'getCityId', 'getLocation', 'getContactList', 'getCX',
    /**
     * Common
     */
    'getRequestId', 'downloadImage', 'closeWindow', 'getNetworkType', 'share',
    /**
     * Funcs
     */
    'sendSMS', 'openScheme', 'jumpToScheme', 'store', 'retrieve', 'ajax', 'isInstalledApp','getWifiInfo','showPhoto','uploadImage',
    /**l
     * Broadcast
     */
    'publish', 'subscribe', 'unsubscribe', 'logout',
    'cacheSave','cacheLoad','cacheDelete','cacheClear','date','alert','actionSheet','share','wixinCheck','weixinBind',
    /**
     * UI
     */
    'setPullDown', 'stopPullDown', 'setTitle', 'setBackgroundColor', 'setLLButton', 'setLRButton', 'setRLButton', 'setRRButton','menutitle','setSegments',
    /**
     * dpMerchant
     * */
    'setTitleRedDot','enableSlideBack','setNavigationBarHidden','toast','prompt','confirm','scanQRCode','selectTab','getPrintDevice','print','cancelUploadImage','editPhoto','stopMusic','checkDeal','setBadge'
];




/**
 * <b>到点综合手机端jsbridge</b><br/>
 * 继承自dpapp-core，[dpapp-core](http://code.dianpingoa.com/f2ei/dpapp-core/tree/master)部分可参考http://code.dianpingoa.com/f2ei/dpapp-core/tree/master
 * @module dpzeus
 * @extends dpapp-core
 * */





/**
 * CheckboxGroup需与Input组件配合使用<br/>
 * 它的作用是将type=checkbox的Input组件在UI上成组的展示。只起到包装作用没有逻辑功能
 * @class 功能模块
 * */

/**
 * 等待整个native就绪后执行回调里的逻辑
 * @method ready
 * @param callback {Function} 需要执行的回调方法
 * @return {Null}
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.ready(()=>{
     *          //页面主逻辑
     *          console.dir('页面主逻辑');
     *      });
 * */

/**
 * 关闭webview
 * @method closeWindow
 * */

/**
 * 打开新的webview，extra参数会用于拼url，并做对value做encode
 * @method openScheme
 * @param opt {Object}
 * @param opt.url {String} 跳转链接
 * @param opt.extra {Object} 此部分的参数会作为url的query传递
 * @param opt.success {Function}
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.openScheme({
          url: "dpcrm://web",
          extra: {
            url:'http://www.dianping.com'
          },
          success: function(){
            // 跳转成功
          }
        });
 * */

/**
 * 打开新的webview，并关闭原窗口。
 * @method jumpToScheme
 * @param opt {Object}
 * @param opt.url {String} 跳转链接
 * @param opt.extra {Object} 此部分的参数会作为url的query传递
 * @param opt.success {Function}
 * */

/**
 * 发送一个请求，获取服务器端的数据<br/>
 * @method ajax
 * @param opts {Object}
 * @param opts.success {Function} 成功后的回调方法
 * @param opts.fail {Function} 失败后的回调方法
 * @param opts.data {Object} 传递给服务端的参数
 * @param opts.method {String} 请求方式 get|post
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.ajax({
     *          method:'post',
     *          url:'https://a.dper.com/demo/demo',
     *          data:{
     *              name:'app'
     *          },
     *          success:function(data){
     *              console.dir('成功');
     *          },
     *          fail:function(){
     *              console.dir('失败');
     *          }
     *      });
 * */

/**
 * 退出用户登陆
 * @method logout
 * */

/**
 * 查找打印机
 * @method getPrintDevice
 * @param opt {Object}
 * @oaram opt.success {Function} 调用成功执行的回调,有返回值
 * @example
 *      DPApp.getPrintDevice({({
          success: function(e) {
            if (e && e.deviceName) {
              alert(e.deviceName);// 未连接打印机返回''
            }
          }
        });
 * */

/**
 * 调用打印机 调用native发送广播，具体的打印方法由业务方实现。
 * @method getPrintDevice
 * @param opt {Object}
 * @oaram opt.content {Object} 和具体业务相关的数据结构
 * @oaram opt.action {String} 广播名称
 * @oaram opt.success {Function} 调用成功执行的回调,有返回值
 * @example
 *      DPApp.print({
          content: {},// 和具体业务相关的数据结构
          action: 'com.dianping.dpmerchant.action.push.DISHPRINT', // 广播名称
          success: function(e) {
            // 发送打印广播成功
          }
        });
 * */

/**
 * 停止音乐播放
 * @method stopMusic
 * @param opt {Object}
 * @oaram opt.success {Function} 调用成功执行的回调
 * @example
 *      DPApp.stopMusic({
          success: function(){
          }
        });
 * */

/**
 * 选择上传图片
 * @method uploadImage
 * @since 0.2.9
 * @param opts {Object}
 * @param opts.callback {Function} callback回调
 * */

/**
 * 取消上传,适用于上传未完成时用户尝试退出当前页面。
 * @method cancelUploadImage
 * @param opt {Object}
 * @oaram opt.success {Function} 调用成功执行的回调
 * @example
 *      DPApp.cancelUploadImage({
          success: function(){
            // 取消上传图片
          },
          error: function() {}
        });
 * */

/**
 * 下载图片，下载完成后，图片会出现在用户设备的资源库中
 * @method downloadImage
 * @param opts {Object}
 * @param opts.type {Integer} 0或1，若为1则下载到相册，为0则返回imageData(base64)
 * @param opts.imageUrl {String} 图片地址
 * @param opts.success {Function}
 * @example
 *      import dpappApollo from 'dpzeus';
 *
 *      dpappApollo.downloadImage({
          type: 1,
          imageUrl: "http://img5.douban.com/view/note/large/public/p22307117.jpg",
          success: function(result){
            alert("下载到相册");
          }
        });
 dpappApollo.downloadImage({
          type: 0,
          imageUrl: "http://img5.douban.com/view/note/large/public/p22307117.jpg",
          success: function(result){
            alert(result.imageData);
          }
        });
 * */

/**
 * 调用native的图片查看功能展示图片
 * @method showPhoto
 * @since 0.2.9
 * @param opt {Object}
 * @param opt.name {String} 图片名称
 * @param opt.url {String} 图片地址
 * @param opt.editable {Boolean} 是否可编辑
 * @param opt.success {Function}
 * @param opt.fail {Function}
 * */

/**
 * 更改图片
 * @method editPhoto
 * @param opt {Object}
 * @oaram opt.success {Function} 调用成功执行的回调
 * @example
 *      DPApp.editPhoto({
          success: function(){
          }
        });
 * */

/**
 * 检查交易
 * @method checkDeal
 * @param opt {Object}
 * @oaram opt.success {Function} 调用成功执行的回调
 * @example
 *      DPApp.checkDeal({
          success: function(){
          }
        });
 * */

/**
 * 获取联系人列表
 * @method getContactList
 * @param opt {Object}
 * @param opt.success {Function}
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.getContactList({
 *          success:function(e){
 *              e.contactList.forEach(function(people){
 *                alert(e.lastName); // 姓
 *                alert(e.firstName); // 名
 *                alert(e.phone); // 号码
 *              });
 *              alert(e.authorized); // 用户是否授权
 *          }
 *
 *      });
 * */




/**
 * @class UI界面设置
 * */

/**
 * 设置标题
 * @method setTitle
 * @param opts {Object}
 * @param opts.title {String} 标题
 * */

/**
 * 设置按钮(base64) <br/>
 * 标题栏从左到右4个位置设置的方法分别为setLLButton,setLRButton,setRLButton,setRRButton。 使用方法一致。<br/>
 * 注意base64代码的data:image/png;base64,部分不需要 base64的图片大小控制为 尺寸44X44(icon本身22X22)的三倍图，即132X132的画布，66X66的icon大小
 * @method setRRButton
 * @param opts {Object}
 * @param opts.type {String} base64，类型
 * @param opts.icon {String} base64的icon
 * @param opts.success {Function}
 * @param opts.handle {Function}
 * */

/**
 * 设置按钮(icon或文字) <br/>
 * 标题栏从左到右4个位置设置的方法分别为setLLButton,setLRButton,setRLButton,setRRButton。 使用方法一致。<br/>
 * 注意base64代码的data:image/png;base64,部分不需要 base64的图片大小控制为 尺寸44X44(icon本身22X22)的三倍图，即132X132的画布，66X66的icon大小
 * @method setLLButton
 * @param opts {Object}
 * @param opts.type {String} 类型
 * @param opts.icon {String} 和native对应的图片名称 例如：’H5_Search‘
 * @param opts.success {Function}
 * @param opts.handle {Function}
 * */

/**
 * 设置按钮(icon或文字) <br/>
 * 标题栏从左到右4个位置设置的方法分别为setLLButton,setLRButton,setRLButton,setRRButton。 使用方法一致。<br/>
 * 注意base64代码的data:image/png;base64,部分不需要 base64的图片大小控制为 尺寸44X44(icon本身22X22)的三倍图，即132X132的画布，66X66的icon大小
 * @method setRLButton
 * @param opts {Object}
 * @param opts.type {String} 类型
 * @param opts.icon {String} 和native对应的图片名称 例如：’H5_Search‘
 * @param opts.success {Function}
 * @param opts.handle {Function}
 * */

/**
 * 设置按钮(icon或文字) <br/>
 * 标题栏从左到右4个位置设置的方法分别为setLLButton,setLRButton,setRLButton,setRRButton。 使用方法一致。<br/>
 * 注意base64代码的data:image/png;base64,部分不需要 base64的图片大小控制为 尺寸44X44(icon本身22X22)的三倍图，即132X132的画布，66X66的icon大小
 * @method setLRButton
 * @param opts {Object}
 * @param opts.type {String} 类型
 * @param opts.icon {String} 和native对应的图片名称 例如：’H5_Search‘
 * @param opts.success {Function}
 * @param opts.handle {Function}
 * */

/**
 * 设置webview背景色
 * @method setBackgroundColor
 * @param opts {Object}
 * @param opts.color {String} 颜色值
 * @param opts.success {Function}
 * */

/**
 * 设置Badge
 * @method setBadge
 * @param opt {Object}
 * @oaram opt.success {Function} 调用成功执行的回调
 * @example
 *      DPApp.setBadge({
          success: function(){
          }
        });
 * */

/**
 * 切换webview的tab
 * @method selectTab
 * @param opt {Object}
 * @oaram opt.index {Number}
 * @oaram opt.success {Function} 调用成功执行的回调
 * @example
 *      DPApp.selectTab({
            index: 0,
            success: function(){},
            fail: function(){}
        });
 * */

/**
 * 设置tab标题红点
 * @method setTitleRedDot
 * @param opt {Object}
 * @param opt.index {Number} 按照次序
 * @oaram opt.type {Number} 0不展示 1纯红点 2text
 * @param opt.context {String} 显示内容 内容较长会变成椭圆
 * @example
 *      DPApp.setTitleRedDot({
            index: 0,//按照次序
            type: 0,// 0不展示 1纯红点 2text
            context: '',//显示内容 内容较长会变成椭圆
        });
 * */

/**
 * 调用App的扫描二维码功能，并返回结果。用户主动关闭扫描界面时，并不会触发dpmerchant的回调。
 * @method scanQRCode
 * @param opt {Object}
 * @oaram opt.success {Function} 调用成功执行的回调 有返回值
 * @example
 *      DPApp.scanQRCode({
            success: function(res) {
                alert(res.value); // 扫描结果
            }
        });
 * */

/**
 * 弹出alert
 * @method alert
 * @since 0.3.0
 * @param opts {Object}
 * @param opts.title {String} alert 标题
 * @param opts.message {String} alert 内容
 * @param opts.options {Array} alert 按钮列表,比如['确认']或者['按钮1'，'按钮2']
 * @param opts.success {Function} 成功后的回调方法
 * @param opts.fail {Function} 失败后的回调方法
 * @returns {Object} {
         "status":"success",
         "errCode":0,
         "select":"0"
     * }
 * */

/**
 * 弹出原生的确认对话框（类似于window.confirm），允许用户确认或取消
 * @method confirm
 * @param opt {Object}
 * @param opt.title {String} 标题文字
 * @param opt.message {String} 内容文字
 * @param opt.okButton {String} 确认按钮文字，可选，默认值『确定』
 * @param opt.cancelButton {String} 取消按钮文字，可选，默认值『取消』
 * @oaram opt.success {Function} 调用成功执行的回调 有返回值
 * @example
 *      DPApp.confirm({
            title: 'title', // 标题文字
            message: 'message', // 内容文字
            okButton: 'OK', // 确认按钮文字
            cancelButton: 'Cancel', // 取消按钮文字
            success: function(e) {
                // 用户点击确认或取消
                if (e.ret) {} // true: 确认 false: 取消
            }
        });
 * */

/**
 * 弹出原生的输入对话框（类似于window.prompt），允许用户输入一段文字，确认或取消。
 * @method prompt
 * @param opt {Object}
 * @param opt.title {String} 标题文字
 * @param opt.message {String} 内容文字
 * @param opt.placeholder {String} 输入框默认文字
 * @param opt.okButton {String} 确认按钮文字，可选，默认值『确定』
 * @param opt.cancelButton {String} 取消按钮文字，可选，默认值『取消』
 * @oaram opt.success {Function} 调用成功执行的回调 有返回值
 * @example
 *      DPApp.prompt({
            title: 'title', // 标题文字
            message: 'message', // 内容文字
            placeholder: 'placeholder', // 输入框默认文字
            okButton: 'btnconfirm', // 确认按钮文字，可选，默认值『确定』
            cancelButton: 'btncancel', // 取消按钮文字，可选，默认值『取消』
            success: function(e) {
                // 用户点击确认或取消
                if (e.ret) {
                    // true: 确认 false: 取消
                    alert(e.text); // 用户输入的文字
                }
            }
        });
 * */

/**
 * 浮层提示(toast) 弹出一段简短的信息，一定时间后消失。 安卓设备上toast显示持续时间受到系统限制，只有2秒和3.5秒两个选项。调用本接口时，如果`timeout`大于2000，则按3.5秒展示；否则按2秒展示。
 * @method toast
 * @param opt {Object}
 * @param opt.title {String} 1 文字
 * @param opt.timeout {Number} 持续时间
 * @example
 *      DPApp.toast({
            title: 'title', // 文字
            timeout: 2000 // 持续时间
        });
 * */

/**
 * 弹出actionSheet
 * @method actionSheet
 * @since 0.3.0
 * @param opts {Object}
 * @param opts.title {String} actionSheet 标题
 * @param opts.options {Array} actionSheet 列表,比如['王大锤','张全蛋','马建国']
 * @param opts.success {Function} 成功后的回调方法
 * @param opts.fail {Function} 失败后的回调方法
 * @returns {Object} {
         "status":"success",
         "errCode":0,
         "selectedIndex":"0"
     * }
 * */

/**
 * 禁用iOS左滑后退
 * @method enableSlideBack
 * @param opt {Object}
 * @param opt.canSlideBack {Boolean} false禁止左滑后退
 * @oaram opt.success {Function} 调用成功执行的回调
 * @example
 *      DPApp.enableSlideBack({
          canSlideBack: true,// false禁止左滑后退
          success: function(){}
        });
 * */

/**
 * 隐藏(显示)titlebar
 * @method setNavigationBarHidden
 * @param opt {Object}
 * @param opt.flag {Number} 1 隐藏APP的titlebar,全屏显示webview,0则显示titlebar
 * @oaram opt.handle {Function} 调用成功执行的回调
 * @example
 *      DPApp.setNavigationBarHidden({
          flag: 1,
          handle: function(){
            alert('success');
          }
        });
 * */

/**
 * 设置Segments
 * @method setSegments
 * @since 0.4.1
 * @param opts {Object}
 * @param opts.segments {Array}   [{"segment":"part1","index":1}, {"segment":"part2","index":2}]
 * @param opts.success {Function} 成功后的回调方法
 * @returns {Object} {
         "status":"success",
         "errCode":0,
         "index":"1"
     * }
 * */

/**
 * 设置menutitle
 * @method menutitle
 * @since 0.4.1
 * @param opts {Object}
 * @param opts.selectedTitle {String}  选中的标题
 * @param opts.list {Array}  list:[{ title:'标题',index:1 },{title:'标题2',index:2}],
 * @param opts.success {Function} 成功后的回调方法
 * @returns {Object} {
         "status":"success",
         "errCode":0,
         "index":"1"
     * }
 * */

/**
 * 调用datepicker选择日期
 * @method date
 * @since 0.3.0
 * @param opts {Object}
 * @param opts.default {String} 2014-11-11 12:12:12(default) | 2014-11-11 | 12:12:12 初始日期
 * @param opts.type: {String} date|time|datetime(default)
 * @param opts.minuteInterval {Integer} 分钟间隔，必须能被60整除，例如：1,10,15,30
 * @param opts.minDate {Integer} 最小的有效日期，以1970年开始的毫秒数
 * @param opts.maxDate {Integer} 最大的有效日期，以1970年开始的毫秒数
 * @param opts.success {Function} 成功后的回调方法
 * @param opts.fail {Function} 失败后的回调方法
 * @returns {Object} {
         "status":"success",
         "errCode":0,
         "value":"2015-11-20 14:20"
     * }
 * */

/**
 * 下拉页面刷新，需要配合stopPullDown一起使用
 * @method setPullDown
 * @requires stopPullDown
 * @param opt {Object}
 * @param opt.success {Function} 设置成功后执行
 * @param opt.fail {Function} 设置失败后执行
 * @param opt.handle {Function} 刷新成功后执行
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.setPullDown({
     *          handle: function(){
     *              dpappApollo.ajax({
     *                  url:'',
     *                  success: function(){
     *                      dpappApollo.stopPullDown();
     *                  }
     *              });
     *          }
     *      });
 * */

/**
 * 停止下拉刷新，需要配合setPullDown一起使用
 * @method stopPullDown
 * @requires setPullDown
 * @param opt {Object}
 * @param opt.success {Function} 设置成功后执行
 * @param opt.fail {Function} 设置失败后执行
 * @param opt.handle {Function} 刷新成功后执行
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.setPullDown({
     *          handle: function(){
     *              dpappApollo.ajax({
     *                  url:'',
     *                  success: function(){
     *                      dpappApollo.stopPullDown({
     *
     *                      });
     *                  }
     *              });
     *          }
     *      });
 * */




/**
 * @class SMS
 * */

/**
 * 发送消息
 * @method sendSMS
 * @since 0.3.0
 * @param opts {Object}
 * @param opts.content {String} 消息内容
 * @param opts.recipients {String} 联系人，多个之间用';'分割开
 * */

/**
 * 是否安装微信
 * @method wixinCheck
 * @since 0.3.0
 * @param opts {Object}
 * @param opts.success {Function} 成功后的回调方法
 * @param opts.fail {Function} 失败后的回调方法
 * @returns {Object} {
         "status":"success",
         "errCode":0,
         "installed":0
     * }
 * */

/**
 * 绑定微信
 * @method weixinbind
 * @since 0.3.0
 * @param opts {Object}
 * @param opts.scope {String}
 * @param opts.success {Function} 成功后的回调方法
 * @param opts.fail {Function} 失败后的回调方法
 * */




/**
 * @class 获取信息
 * */

/**
 * 获取用户信息
 * @method getUserInfo
 * @param opt {Object}
 * @param opt.success {Function}
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.getUserInfo({
 *          success:function(e){
 *              console.dir(e.dpid); //用户的dpid
 *              console.dir(e.userId); //用户id
 *              console.dir(e.token); //用户token
 *          }
 *      })
 * */

/**
 * 获取手机端基本信息
 * @method getDeviceInfo
 * @since 0.3.0
 * @param opt {Object}
 * @param opt.success {Function}
 * @param opt.fail {Function}
 * @example
 *      return {
                  "os":"" ,
                  "agent": "iphone",
                  "channel": "",
                  "version": "",
                  "deviceid": "",
                  "platform": "",
                  "screen": "",
                  "cityid": "",
                  "uuid": "",
                  "dpid": "",
                  "islogin": "",
                  "lat": "",
                  "lng":"",
                  "address": "",
              };
 * }
 * */

/**
 * 获取城市信息
 * @method getCityId
 * @param opt {Object}
 * @param opt.success {Function}
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.getCityId({
 *          success:function(e){
 *              console.dir(e.cityId);  //切换城市
 *              console.dir(e.locCityId);//定位城市
 *          }
 *      });
 * */

/**
 * 获取网络状态
 * @method getNetworkType
 * @param opts {Object}
 * @param opts.success {Function}
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.getNetworkType({
          success: function(e){
            alert(e.networkType); // 2g, 3g, 4g, wifi
          }
        });
 * */

/**
 * 获取wifi信息
 * @method getWifiInfo
 * @since 0.3.0
 * @param opt {Object}
 * @param opt.success {Function}
 * @param opt.fail {Function}
 * */

/**
 * 获取地理位置信息
 * @method getLocation
 * @param opt {Object}
 * @param opt.success {Function} 获取完毕执行的回调，回调方法中会传入获取到的经度和纬度信息
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.getLocation({
     *          success: function(result){
     *              console.dir(result.lat);
     *              console.dir(result.lng);
     *          }
     *      });
 * */

/**
 * 获取用户所使用的浏览器的代理信息
 * @method getUA
 * @param opt {Object} 参数传递
 * @param opt.success {Function} 获取成功后执行的回调函数
 * @return {Object}
 * @example
 *      import dpappApollo from 'dpzeus';
 *      let ua = dpappApollo.getUA();
 *
 *      console.dir(ua.platform); //平台信息
 *      console.dir(ua.appName);  //app名字
 *      console.dir(ua.osName);
 *      console.dir(ua.osVersion);
 * */




/**
 * @class 收发消息
 * */

/**
 * 订阅消息
 * @method subscribe
 * @param opts.action {String} 订阅的消息名称
 * @param opts.success {Function} 订阅成功的回调
 * @param opts.handle {Function} 接受到消息的回调
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.subscribe({
          action: 'myMessageName',
          success: function(){
            alert("订阅成功");
          },
          handle: function(e){
            alert("广播触发");
          }
        });
 * */

/**
 * 取消订阅消息
 * @method unsubscribe
 * @param opts.action {String} 消息名称
 * @param opts.handle {Function} 取消特定订阅回调，不传则取消所有回调
 * @param opts.success {Function} 取消成功回调
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.unsubscribe({
          action: 'myMessageName',
          handle: func,
          success: function(e){
            alert("取消绑定")
          }
        });
 * */

/**
 * 发布消息
 * @method publish
 * @param opts {Object}
 * @param opts.action {String} 发布的消息名称
 * @param opts.data {Object} 需要传递的数据
 * @param opts.success {Function} 发送成功的回调
 * @example
 *      import dpappApollo from 'dpzeus';
 *      dpappApollo.publish({
          action: 'myMessageName',
          data: {
            'info': 'detail'
          },
          success: function(){
            alert("发送成功");
          }
        });
 * */




/**
 * @class 数据存储
 * */

/**
 * 存储cache
 * @method cacheSave
 * @since 0.3.0
 * @param opts {Object}
 * @param opts.key {String} cache的键名称
 * @param opts.value: {String} 键对应的value值
 * @param opts.expiration {Integer} 失效时间可选，默认无穷大
 * @param opts.temp {Boolean} 是否是临时存储 可选，默认false，如为true的话，每次启动清空
 * @param opts.success {Function} 成功后的回调方法
 * @param opts.fail {Function} 失败后的回调方法
 * @returns {Object} {
         "status":1,
         "errCode":0
     * }
 * */

/**
 * 读取cache
 * @method cacheLoad
 * @since 0.3.0
 * @param opts {Object}
 * @param opts.key {String} cache的键名称
 * @param opts.success {Function} 成功后的回调方法
 * @param opts.fail {Function} 失败后的回调方法
 * @returns {Object} {
         "status":1,
         "value":"testValue1",
         "expired":false,
         "errCode":0
     * }
 * */

/**
 * 删除一条cache
 * @method cacheDelete
 * @since 0.3.0
 * @param opts {Object}
 * @param opts.key {String} cache的键名称
 * @param opts.success {Function} 成功后的回调方法
 * @param opts.fail {Function} 失败后的回调方法
 * @returns {Object} {
         "status":1,
         "errCode":0
     * }
 * */

/**
 * 清空所有cache
 * @method cacheClear
 * @since 0.3.0
 * @param opts {Object}
 * @param opts.success {Function} 成功后的回调方法
 * @param opts.fail {Function} 失败后的回调方法
 * @returns {Object} {
         "status":1,
         "errCode":0
     * }
 * */