import React from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import {Button, Col, Icon, Input, Row, Table} from 'antd';
import {columns, dataSource} from "../../data/data";
import {Link} from "react-router-dom";


function TokenListPage() {

    return (

        <Row >
            <Col>
                <h1 className='contentTitle'>Token List</h1>
                <Row type="flex" justify="center">
                    <Col span={16} >
                        <Input
                            className="searchBox"
                            placeholder="Contract name or address or ticker"
                            prefix={<Icon type="search" style={{ color: 'white' }} />}
                        />
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
                <Table rowClassName="rows"
                       bordered={false}
                       columns={columns}
                       dataSource={dataSource}
                       size="medium"/>
            </Col>
        </Row>
    )

}

export default TokenListPage;