import React, {memo, useEffect, useState} from "react";
import {Button, Form, Input, Select} from "antd";
import {uniqueID} from "../../utils/helperFunctions";
import axios from "axios";
import moment from "moment";

/**
 * User can create new tokens through this TokenForm component
 * Plan to refactor it using the Decorator pattern with useContext React hooks api
 * @param form
 */

function TokenForm({form})
{
    const { Option } = Select;

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 5 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 12 },
        },
    };

    // Plan to implement with React custom hooks
    const handleSubmit = event => {
        event.preventDefault();

        const { validateFields } = form;

        validateFields((err, values) => {
            if (!err) {
                const newToken = values;
                const DATE_FORMAT = 'DD MMM YYYY';

                newToken.creationDate = moment().format(DATE_FORMAT);
                localStorage.setItem('newToken', JSON.stringify(newToken));
                console.log(newToken)
            }
        });
    };

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://restcountries.eu/rest/v2/all',
            );
            setCountries(result.data);
        };
        fetchData();
    }, []);


    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            {/*Refactor it with contextApi - decorator pattern: context.Provider, context.Consumer*/}
            <Form.Item label="Token name">
                {form.getFieldDecorator('tokenName', {
                    rules: [{ required: true, message: 'Token name is required!' }],
                })(
                    <Input
                        placeholder="Token name"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Token ticker">
                {form.getFieldDecorator('tokenTicker', {
                    rules: [{ required: true, message: 'Token ticker is required!' }],
                })(
                    <Input
                        placeholder="Token ticker"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Token supply">
                {form.getFieldDecorator('totalSupply', {
                    rules: [{ required: true, message: 'Total supply is required!' }],
                })(
                    <Input
                        placeholder="Total supply"
                        type="number"
                    />,
                )}
            </Form.Item>
            <Form.Item label="Issuer name">
                {form.getFieldDecorator('issuerName', {
                    rules: [{ required: true, message: 'Issuer name is required!' }],
                })(
                    <Input
                        placeholder="Issuer name"
                    />,
                )}
            </Form.Item>
            <Form.Item label="template">
                {form.getFieldDecorator('template', {
                    rules: [{ required: true, message: 'Template is required!' }],
                })(
                    <Select
                        placeholder="Template">
                        <Option value="ERC20">ERC20</Option>
                    </Select>
                )}
            </Form.Item>
            <Form.Item label='Country'>
                {form.getFieldDecorator('country', {
                    rules: [{ required: true, message: 'Please, choose a country' }],
                })(
                    <Select placeholder="Country"
                    >
                        {
                            countries.map(country => (
                                <Option
                                    key={uniqueID()}
                                    value={country.name}
                                >
                                    {country.name}
                                </Option>
                            ))
                        }
                    </Select>
                )}
            </Form.Item>
            <Button className="issueToken-button" htmlType="submit">
                Issue Tokeno
            </Button>
        </Form>
    )
}

export default memo(Form.create({name: 'newToken'})(TokenForm));