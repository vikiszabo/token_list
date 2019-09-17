import React, {memo} from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import {Col, Row} from 'antd';
import LeftMenu from "../../components/leftMenu/LeftMenu";
import TokenListPage from "../tokenListPage/TokenListPage";
import {Route, Switch} from 'react-router-dom';
import IssueTokenPage from "../issueTokenPage/IssueTokenPage";
import {dataSource} from "../../data/data";
import {useStateWithLocalStorage} from "../../utils/customHooks";

/**
 * The main page of the app
 */
function TokenHomePage() {

    // Passed to LeftMenu - plans to synchronise LeftMenu and buttons routing
    const menuRouting = [
        {
            path: '/tokens/issue-token',
            label: "Issue Token",
            icon: "plus",
            key: '1'
        },
        {
            path: '/tokens',
            label: "Token List",
            icon: "unordered-list",
            key: '2'
        }
    ];


    /**
     *  Handling states and tracking local storage logic needs to be implemented yet
     *  with React Hooks apis.
     */

    localStorage.setItem('tokens', JSON.stringify(dataSource));
    const [tokens, setTokens] = useStateWithLocalStorage('tokens');

    const deleteToken = (key) => {
        const newTokens = localStorage.getItem(tokens).filter(token => token.key !== key);
        setTokens(newTokens);
    };


    return (
        <Row type="flex" justify="space-around">
            <Col span={6} className="leftMenu-col">
                <LeftMenu menuRouting={menuRouting}/>
            </Col>
            <Col span={18} className="page-col">
                <Switch>
                    <Route exact path="/" render={() =>
                        <TokenListPage tokens={tokens} deleteToken={deleteToken}/>}/>
                    <Route exact path="/tokens" render={() =>
                        <TokenListPage tokens={tokens} deleteToken={deleteToken}/>}/>
                    <Route path="/tokens/issue-token" render={() => <IssueTokenPage/>}/>
                </Switch>

            </Col>
        </Row>
    )
}

export default memo(TokenHomePage);