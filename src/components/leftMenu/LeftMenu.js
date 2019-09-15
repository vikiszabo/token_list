import LOGO from "../../logo.svg";
import {Menu, Icon} from "antd";
import React, {memo} from "react";
import "./Style.css";
import { Link } from "react-router-dom";

function LeftMenu(
    {
        menuRouting,
        selectedMenu
    }
)
{
    return (
        <>
            <div className='logo'>
                <img alt={''} src={LOGO} width={50} height={50}/>
            </div>
            <Menu  mode={'inline'} defaultSelectedKeys={['2']} selectedKeys={[selectedMenu]}>
                {
                    menuRouting.map((route) =>
                        <Menu.Item key={route.key}>
                            <Link to={route.path}>
                                <Icon type={route.icon} className="menuItems"/>
                                <span className={ "menuItems" }>{route.label}</span>
                            </Link>
                        </Menu.Item>
                    )
                }
            </Menu>
        </>
    )
}

export default memo(LeftMenu);