

export const dataSource = [
    {
        key: '1',
        tokenName: 'TTism',
        ticker: 'TTT',
        supply: 100000,
        date: '17 May 2019',
        issuerName: 'xxxx SA',
        template: 'ERC20',
        fixed: 'left'
    },
    {
        key: '2',
        tokenName: 'Vvism',
        ticker: 'VVV',
        supply: 200000,
        date: '17 May 2018',
        issuerName: 'vvvv SA',
        template: 'ERC20',
        fixed: 'left'
    },
];

export const columns = [
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
    }
];
