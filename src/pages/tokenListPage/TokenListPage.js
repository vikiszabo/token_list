import React from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import { Layout, Menu, Icon } from 'antd';
import LOGO from '../../logo.svg';


function TokenListPage() {

    const {Sider, Content} = Layout;

    return (
        <Layout>
            <Sider width={'25%'}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <img alt={''} src={LOGO} width={50} height={50}/>

                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="plus" />
                        <span>Issue Token</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="unordered-list" />
                        <span>Token List</span>
                    </Menu.Item>
                </Menu>

            </Sider>
            <Content width={'75%'}> Content
            </Content>
        </Layout>
    )

}

export default TokenListPage;