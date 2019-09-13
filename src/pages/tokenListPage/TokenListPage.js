import React from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import {Icon, Layout, Menu} from 'antd';
import LOGO from '../../logo.svg';


function TokenListPage() {

    const {Sider, Content} = Layout;

    return (
        <Layout style={{height: 1200, width: 1600}}>
            <Sider type={'flex'} justify={'center'} width={'25%'} >

                <div className='logo'>
                    <img alt={''} src={LOGO} width={50} height={50}/>
                </div>
                <Menu  mode={'inline'} defaultSelectedKeys={['2']}>
                    <Menu.Item  key="1">
                        <Icon type="plus" />
                        <span>Issue Token</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="unordered-list" />
                        <span>Token List</span>
                    </Menu.Item>
                </Menu>

            </Sider>
            <Content width={'75%'} > Content
            </Content>
        </Layout>
    )

}

export default TokenListPage;