import LOGO from "../../logo.svg";
import {Menu, Icon, Item} from "antd";
import React from "react";
import "./Style.css";

function LeftMenu() {

    return (
        <>
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
        </>
    )
}

export default LeftMenu;