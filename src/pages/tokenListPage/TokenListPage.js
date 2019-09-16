import React, {memo} from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import {Button, Col, Row} from 'antd';
import {Link} from "react-router-dom";
import TokenTable from "../../components/TokenTable/TokenTable";
import SearchInput from "../../components/SearchInput/SearchInput";

function TokenListPage(
    {
        tokens,
        deleteToken
    })
{

    return (

        <Row >
            <Col>
                <h1 className='contentTitle'>Token List</h1>
                <Row type="flex" justify="center">
                    <Col span={16} >
                        <SearchInput />
                    </Col>
                    <Col span={8}>
                        <Button className="issueToken-button" >
                            <Link to="/tokens/issue-token">
                                Issue Token
                            </Link>
                        </Button>

                        <Button className="exportToCsv-button"  icon="download" >
                            Export to CSV
                        </Button>
                    </Col>
                </Row>
                <TokenTable tokens={tokens} deleteToken={deleteToken}/>
            </Col>
        </Row>
    )
}

export default memo(TokenListPage);