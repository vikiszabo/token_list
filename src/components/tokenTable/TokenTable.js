import {Icon, Table} from "antd";
import React, {memo} from "react";
import './Style.css';
import PropTypes from "prop-types";

/**
 * Table component to display the token list.
 * @param tokens
 */
function TokenTable({tokens}) {
    const {Column} = Table;

    const columns = [
        {
            title: 'Token name',
            dataIndex: 'tokenName',
            fixed: 'left'
        },
        {
            title: 'Token ticker',
            dataIndex: 'ticker',
            fixed: 'left'
        },
        {
            title: 'Total supply',
            dataIndex: 'supply',
            fixed: 'left'
        },
        {
            title: 'Creation date',
            dataIndex: 'date',
            fixed: 'left'
        },
        {
            title: 'Issuer name',
            dataIndex: 'issuerName',
            fixed: 'left'
        },
        {
            title: 'Template',
            dataIndex: 'template',
            fixed: 'left',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            align: 'center',
            fixed: 'right',
            render: () => (
                <Icon type="delete"
                      style={{color: '#56E8CD', fontSize: '1rem'}}/>

            )
        }
    ];

    return (
        <>
            <Table rowClassName="rows"
                   size="medium"
                   dataSource={tokens}
                   rowKey={tokens.map(token => token.key)}
            >
                {
                    columns.map((column) =>
                        <Column key={column.dataIndex}
                                title={column.title}
                                dataIndex={column.dataIndex}
                                render={column.render}
                                align={column.align}
                        />
                    )
                }
            </Table>
        </>
    )
}

TokenTable.propTypes = {
    tokens: PropTypes.array.isRequired
};

export default memo(TokenTable);