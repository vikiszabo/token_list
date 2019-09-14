import React from 'react';
import {Icon} from 'antd';


export const dataSource = [
    {
        key: '1',
        tokenName: 'TTism',
        ticker: 'TTT',
        supply: 100000,
        date: '17 Max 2019',
        issuerName: 'xxxx SA',
        template: 'ERC20',
        fixed: 'left'
    },
];

export const columns = [
    {
        title: 'Token name',
        dataIndex: 'tokenName',
        key: 'tokenName',
        fixed: 'left'
    },
    {
        title: 'Token ticker',
        dataIndex: 'ticker',
        key: 'ticker',
        fixed: 'left'
    },
    {
        title: 'Total supply',
        dataIndex: 'supply',
        key: 'supply',
        fixed: 'left'
    },
    {
        title: 'Creation date',
        dataIndex: 'date',
        key: 'date',
        fixed: 'left'
    },
    {
        title: 'Issuer name',
        dataIndex: 'issuerName',
        key: 'issuerName',
        fixed: 'left'
    },
    {
        title: 'Template',
        dataIndex: 'template',
        key: 'template',
        fixed: 'left',
    },
   {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <Icon type="delete" style={{ color: '#56E8CD', fontSize: '16px' }} />,
       fixed: 'right',
       align: 'center'
    },
];
