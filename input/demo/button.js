/**
 * Created by mac on 15/11/4.
 */
import React, { Component ,PropTypes} from 'react';
import {ButtonGroup,Button,Row,Col,Grid} from 'eagle-ui';
import {DemoLayout, DemoItem, DemoShow, CodeShow} from '../libs/Layout';
import Code, {getFile} from '../libs/Code';

export default class ButtonCls extends Component{
    onActive(target,html){
        console.dir(html);
        alert('测试');
    }
    render(){
        return (
            <DemoLayout title="按钮组件">
                <DemoItem title="按钮样式">
                    <CodeShow>
                        <Code code={getFile('button-demo1')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button egStyle="warning">警告</Button>&nbsp;
                        <Button egStyle="success">成功</Button>&nbsp;
                        <Button egStyle="danger">危险</Button>&nbsp;
                        <Button egStyle="error">错误</Button>&nbsp;
                        <Button egStyle="info">info</Button>&nbsp;
                        <Button >默认</Button>&nbsp;
                        <Button egStyle="white">白色</Button>&nbsp;
                        <Button egStyle="link" >链接</Button>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="按钮大小">
                    <CodeShow>
                        <Code code={getFile('button-demo2')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button egSize="xs" >小号</Button>&nbsp;
                        <Button>默认</Button>&nbsp;
                        <Button egSize="lg" >大号</Button>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="按钮组排列">
                    <CodeShow>
                        <Code code={getFile('button-demo3')}/>
                    </CodeShow>
                    <DemoShow>
                        <ButtonGroup egType="justify" activeCallback={this.onActive}>
                            <Button egStyle="warning">水平按钮组1</Button><Button egStyle="warning">水平按钮组2</Button><Button egStyle="warning">水平按钮组3</Button>
                        </ButtonGroup>
                        <br/>
                        <ButtonGroup egType="tacked">
                            <Button>垂直按钮组1</Button><Button>垂直按钮组2</Button><Button>垂直按钮组3</Button>
                        </ButtonGroup>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="空心按钮">
                    <CodeShow>
                        <Code code={getFile('button-demo4')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button egStyle="warning" hollow>警告</Button>&nbsp;
                        <Button egStyle="success" hollow>成功</Button>&nbsp;
                        <Button egStyle="danger" hollow>危险</Button>&nbsp;
                        <Button egStyle="error" hollow>错误</Button>&nbsp;
                        <Button egStyle="white" hollow>white</Button>&nbsp;
                        <Button egStyle="link" hollow>link</Button>
                    </DemoShow>
                </DemoItem>
                <DemoItem title="默认／禁用">
                    <CodeShow>
                        <Code code={getFile('button-demo5')}/>
                    </CodeShow>
                    <DemoShow>
                        <Button radius egSize="sm">默认</Button>&nbsp;
                        <Button radius egSize="sm" disabled>默认不可点</Button>
                        <br/><br/>
                        <Button egStyle="white">白色</Button>&nbsp;
                        <Button egStyle="white" disabled>白色不可点</Button>
                        <br/><br/>
                        <Button egStyle="success">成功</Button>&nbsp;
                        <Button egStyle="success" disabled>成功不可点</Button>
                    </DemoShow>
                </DemoItem>
            </DemoLayout>
        );
    }
}