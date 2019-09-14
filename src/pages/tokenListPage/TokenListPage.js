import React from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import {Button, Icon, Input, Layout, Table} from 'antd';
import LeftMenu from "../../components/leftMenu/LeftMenu";
import {columns, dataSource} from "../../data/data";


function TokenListPage() {

    const {Sider, Content} = Layout;


    return (
        <Layout style={{height: 1200, width: 1600}}>
            <Sider type={'flex'} justify={'center'} width={'25%'} >
                <LeftMenu/>
            </Sider>
            <Content width={'75%'} >

                <h1 className='contentTitle'>Token List</h1>
                <div className={"searchActions-div"}>
                <Input
                    className="searchBox"
                    placeholder="Contract name or address or ticker"
                    prefix={<Icon type="search" style={{ color: 'white' }} />}
                />
                <div>
                    <Button className="issueToken-button" size={"default"}>
                        Issue Token
                    </Button>
                    <Button className="exportToCsv-button"  icon="download" size={"default"}>
                        Export to CSV
                    </Button>
                </div>
                </div>
                <Table columns={columns} dataSource={dataSource}/>

            </Content>
        </Layout>
    )

}

export default TokenListPage;