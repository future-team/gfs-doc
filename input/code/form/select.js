
import React, {PropTypes} from 'react';
import ReactDom from 'react/lib/ReactDOM';
import classnames from 'classnames';
import Input from './Input.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';

import Search from './sug/Search';

/**
 * 下拉选择框组件<br>
 *     支持在input框中输入文字或者点击下拉菜单中的选项进行查询,同时支持上下方向键进行选择。
 * 主要属性接口：
 * <ul>
 *     <li>defaultChecked:默认显示的选项即选中的选项<br>
 *         如：<code>
 *             defaultChecked="上海"
 *         </code>
 *     </li>
 *     <li>getValueCallback:获取元素之后的回调方法，主要将选中值传递给父级元素<br>
 *         如：<code>getValueCallback={::this.getValue}</code>
 *     </li>
 *     <li>placeholder:提示框的内容<br>
 *         如：<code>placeholder="请选择"</code>
 *     </li>
 *
 * </ul>
 * @class Select
 * @module 基础组件
 * @submodule form
 * @constructor
 * @extends Component
 * @demo #/select|select.js
 * @show true
 * */
export default class Select extends Search {
    static defaultProps = {
        /**
         * 回调方法，主要作用将value传给父级元素。默认为null
         * @event  getValueCallback
         * @param {primitive/pointer} value 值
         * @param {string} key 键
         * @param {string} type 类型
         * @default null
         * */
        getValueCallback: null,
        /**
         * 没有选中任何item时的占位文案
         * @property placeholder
         * @type string
         * */
        classPrefix: 'select',
        componentTag: 'div',
        defaultValue:'',
        /**
         * 默认选中值，即初始显示内容
         * @property defaultChecked
         * @type String
         * @default ''
         * */
        defaultChecked:'',
        icon:'arrow-dropdown',
        /**
         * 报svg的warning竟然在这里。。 真尴尬
         * */
        iconStyle:{
            width:'30px',
            textAlign: 'center',
            // height:'30px',
            // top: '15px',
            right: 0
        }
    };

    constructor(props, context,defaultState={}) {
        super(props, context);
        this.inputId = this.uniqueId();
        super.setDefaultState(defaultState);
    }
    entryCallback(){
        if(this.state._activeValue =='' && this.state.value ==''){
            this.setDefaultData();
            this.show();
        }

    }
}