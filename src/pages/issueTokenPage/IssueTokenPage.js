import React, {memo} from 'react';
import 'antd/dist/antd.css';
import TokenForm from "../../components/tokenForm/TokenForm";
import {Button, Col, Row} from "antd";
import {Link, withRouter} from "react-router-dom";

/**
 * The page where you are able to add new token to the list.
 */
function IssueTokenPage() {

    return (
        <>
            <Row type="flex" justify="space-between" align="middle">
                <Col span={14}>
                    <h1 className="contentTitle">Issue Token</h1>
                </Col>
                <Col span={10}>
                    <Button className="action-buttons" htmlType="button">
                        <Link to="/tokens">
                            Back to Token List
                        </Link>
                    </Button>
                </Col>
            </Row>
            <TokenForm/>
        </>
    )
}

export default memo(withRouter(IssueTokenPage));