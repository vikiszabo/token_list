import {Form, Icon, Input} from "antd";
import React from "react";
import './Style.css';

/**
 * Reusable component
 * Plan to customise it and implement logic using React hooks apis.
 */
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