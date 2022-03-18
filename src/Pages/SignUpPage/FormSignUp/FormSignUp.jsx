import React from 'react';
import {Button, Form, Input, Select} from 'antd';
import userServices from "../../../Services/userServices";
import {useHistory} from "react-router-dom";

const { Option } = Select;

function FormSignUp() {
    const history = useHistory()
    const onFinish = (values) => {
        console.log('Success:', values);
        handleSignUp(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleSignUp = (values) => {
        userServices.signUpServiceAPI(values)
            .then((res) => {
                console.log(res.data.content)
                history.push('/signin')
            })
            .catch((err) => {
                console.log(err.response.data.content)
            })
    }
    return (
        <div className='bg-white px-12 py-6 rounded-xl'>
            <Form
                name="basic"
                labelCol={{
                    span: 24,
                }}
                wrapperCol={{
                    span: 24,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on">
                <Form.Item
                    label="Tài Khoản"
                    name="taiKhoan"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}>
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Mật Khẩu"
                    name="matKhau"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}>
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Họ Tên"
                    name="hoTen"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Số Điện Thoại"
                    name="soDt"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Mã Nhóm"
                    name="maNhom"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}>
                    <Select
                        placeholder="Chọn Nhóm"
                        allowClear>
                        <Option value="GP01">GP01</Option>
                        <Option value="GP02">GP02</Option>
                        <Option value="GP03">GP03</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 11,
                        span: 24,
                    }}>
                    <Button className='rounded-lg bg-blue-600' type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default FormSignUp;