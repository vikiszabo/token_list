import React, {memo, useEffect, useState} from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import {Col, Row} from 'antd';
import LeftMenu from "../../components/leftMenu/LeftMenu";
import TokenListPage from "../tokenListPage/TokenListPage";
import {Route, Switch} from 'react-router-dom';
import IssueTokenPage from "../issueTokenPage/IssueTokenPage";
import {dataSource} from "../../data/data";


function TokenHomePage() {
    const menuRouting = [
        {
            path: '/tokens/issue-token',
            label: "Issue Token",
            icon: "plus",
            key: "1"
        },
        {
            path: '/tokens',
            label: "Token List",
            icon: "unordered-list",
            key: "2"
        }
    ];

    const [tokens, setTokens] = useState(dataSource);

    localStorage.setItem('tokensAtStart', JSON.stringify(tokens));


    return (

       <Row type="flex" justify="space-around">
           <Col span={6} className="leftMenu-col">
               <LeftMenu menuRouting={menuRouting}/>
           </Col>
           <Col span={18} className="page-col">
               <Switch>
                   <Route exact path="/" render={() =>
                       <TokenListPage />}/>
                   <Route exact path="/tokens" render={() =>
                       <TokenListPage />}/>
                   <Route  path="/tokens/issue-token" render={() => <IssueTokenPage />} />
               </Switch>

           </Col>
       </Row>

    )

}

export default memo(TokenHomePage);