import React, {memo} from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import {Button, Col, Icon, Input, Row, Table} from 'antd';
import {columns, dataSource} from "../../data/data";
import {Link} from "react-router-dom";


function TokenListPage() {

    const { Column } = Table;

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
                       dataSource={dataSource}
                       size="medium">

                    {
                        columns.map((column, index) =>
                        <Column title={column.title} dataIndex={column.dataIndex} key={column.key} />
                        )
                    }

                    <Column title='Action'
                            dataIndex='delete'
                            key='delete'
                            render={() => <Icon type="delete"
                                                style={{color: '#56E8CD', fontSize: '1rem'}}/>}
                                fixed= 'right'
                                align= 'center'
                            />

                </Table>
            </Col>
        </Row>
    )

}

export default memo(TokenListPage);