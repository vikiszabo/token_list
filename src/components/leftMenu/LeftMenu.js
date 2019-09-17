import LOGO from "../../logo.svg";
import {Icon, Menu} from "antd";
import React, {memo} from "react";
import "./Style.css";
import {Link} from "react-router-dom";
import {uniqueID} from "../../utils/helperFunctions";
import PropTypes from 'prop-types';

/**
 * This component helps the user to navigate easily through the application.
 * @param menuRouting
 */
function LeftMenu({menuRouting})
{
    return (
        <>
            <div className='logo'>
                <img alt={''} src={LOGO} width={50} height={50}/>
            </div>
            <Menu  mode={'inline'} defaultSelectedKeys={['2']}>
                {
                    menuRouting.map((route) =>
                        <Menu.Item key={uniqueID()}>
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

LeftMenu.propTypes = {
    menuRouting: PropTypes.array.isRequired
};


export default memo(LeftMenu);