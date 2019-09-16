import React, {memo} from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import {Button, Col, Form, Icon, Input, Row, Table} from 'antd';
import {columns} from "../../data/data";
import {Link} from "react-router-dom";
import {uniqueID} from "../../utils/helperFunctions";

function TokenListPage(
    {
        tokens,
        deleteToken
    }
)
{
    const { Column } = Table;

    const onDelete = (key, e) => {
        e.preventDefault();
        deleteToken(key);
    };

    return (

        <Row >
            <Col>
                <h1 className='contentTitle'>Token List</h1>
                <Row type="flex" justify="center">
                    <Col span={16} >
                        <Form >
                            <Form.Item >
                                <Input
                                    className="searchBox"
                                    placeholder="Contract name or address or ticker"
                                    prefix={<Icon type="search" style={{ color: 'white' }} />}
                                />
                            </Form.Item>
                        </Form>
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
                       dataSource={tokens}
                       size="medium"
                       rowKey={token => token.key}
                >
                    {
                        columns.map((token) =>
                            <Column key={uniqueID()} title={token.title} dataIndex={token.dataIndex}  />
                        )
                    }
                    <Column title='Delete'
                            dataIndex='delete'
                            render={(record) => (
                                <Icon type="delete"
                                      style={{color: '#56E8CD', fontSize: '1rem'}}
                                      onClick={(e) => {onDelete(record.key, e)}}
                                />
                            )}
                            fixed= 'right'
                            align= 'center'
                    />
                </Table>
            </Col>
        </Row>
    )

}

export default memo(TokenListPage);