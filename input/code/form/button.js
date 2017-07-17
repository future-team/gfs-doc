/**
 * Created by mac on 15/9/7.
 */
import React,{PropTypes} from 'react';
import Component from './utils/Component';
import classnames from 'classnames';

/**
 * 按钮组件提供内置样式
 * @class Button
 * @module 基础组件
 * @submodule form
 * @extends Component
 * @constructor
 * @demo #/button|button.js
 * @show true
 * */
export default class Button extends Component{
    static propTypes = {
        /**
         * 按钮尺寸,分别为xs、sm、lg
         * @property egSize
         * @type String
         * @default sm
         * */
        egSize:PropTypes.string,
        /**
         * 是否禁用按钮
         * @property disabled
         * @type Boolean
         * @default false
         * @since 1.0.1
         * @optional aa,bbbb
         * */
        disabled:PropTypes.bool,
        //success:PropTypes.bool,
        /**
         * 按钮是否处于选中状态
         * @property active
         * @type Boolean
         * @default false
         * */
        active:PropTypes.bool,
        /**
         * 按钮颜色样式
         * @property egStyle
         * @type Boolean
         * @optional success,error,warning,danger,default,link,white
         * @default ''
         * */
        egStyle:PropTypes.string,
        classPrefix:PropTypes.string,
        /**
         * 标签tagName
         * @property componentTag
         * @type String
         * @default 'button'
         * */
        componentTag:PropTypes.string,
        /**
         * 是否为块级显示
         * @property block
         * @type Boolean
         * @default false
         * */
        block:PropTypes.bool,
        egHref:PropTypes.string
        /**
         * 是否只将主题颜色应用于边框，而不是应用于背景色
         * @property hollow
         * @type Boolean
         * @default false
         * */
    };
    static defaultProps = {
        egSize: 'default',
        classPrefix: 'btn',
        egStyle: 'default',
        componentTag: 'button'
    };
    //lg
    //sm
    //xs this.getClassName('demo'); eg-demo
    constructor(props, context) {
        super(props, context);
        this.setProperty('hollow','hollow');
    }

    render(){
        //const {} = this.props;
        //什么颜色，大小  类型
        let {componentTag:Component} = this.props;

        return (
            <Component {...this.otherProps} className={
                classnames(
                    this.getProperty(),
                    this.props.className
                )
                }>{this.props.children}</Component>
        );
    }
}