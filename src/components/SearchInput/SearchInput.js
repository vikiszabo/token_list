import {Form, Icon, Input} from "antd";
import React from "react";
import './Style.css';

function SearchInput() {

    return (
        <Form >
            <Form.Item >
                <Input
                    className="searchBox"
                    placeholder="Contract name or address or ticker"
                    prefix={<Icon type="search" style={{ color: 'white' }} />}
                />
            </Form.Item>
        </Form>
    )
}

export default SearchInput;