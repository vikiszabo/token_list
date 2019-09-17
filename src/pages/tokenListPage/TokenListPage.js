import React, {memo} from 'react';
import 'antd/dist/antd.css';
import './Style.css';
import {Button, Col, Row} from 'antd';
import {Link} from "react-router-dom";
import TokenTable from "../../components/tokenTable/TokenTable";
import SearchInput from "../../components/SearchInput/SearchInput";
import PropTypes from "prop-types";

/**
 * This is the page where you can see and search tokens.
 * @param tokens
 */
function TokenListPage({tokens}) {

    return (

        <Row>
            <Col>
                <h1 className='contentTitle'>Token List</h1>
                <Row type="flex" justify="center">
                    <Col span={16}>
                        <SearchInput/>
                    </Col>
                    <Col span={8}>
                        <Button className="issueToken-button">
                            <Link to="/tokens/issue-token">
                                Issue Token
                            </Link>
                        </Button>

                        <Button className="action-buttons" icon="download">
                            Export to CSV
                        </Button>
                    </Col>
                </Row>
                <TokenTable tokens={tokens}/>
            </Col>
        </Row>
    )
}

TokenListPage.propTypes = {
    tokens: PropTypes.array.isRequired
};


export default memo(TokenListPage);