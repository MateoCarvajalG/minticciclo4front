import React from "react";
import "antd/dist/antd.css";
import "../styles/register.css";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const Register = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="57">+57</Option>
      </Select>
    </Form.Item>
  );
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 header">
      <h1>tuconstructor.com</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              prefix: "57",
            }}
            scrollToFirstError
          >
            <Form.Item
              name="nombre"
              label="Nombre"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el nombre",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="apellidos"
              label="Apellidos"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el apellido",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "El correo electronico es incorrecto",
                },
                {
                  required: true,
                  message: "por favor ingrese el correo electronico",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Contraseña"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese la contraseña",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirmar"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Confirma tu contraseña",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      new Error("Las contraseñas no coinciden")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Numero Celular"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el numero de celular",
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Genero"
              rules={[
                {
                  required: true,
                  message: "Por Favor selecciona el genero",
                },
              ]}
            >
              <Select placeholder="select your gender">
                <Option value="male">Masculino</Option>
                <Option value="female">Femenino</Option>
                <Option value="other">Otro</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Registrarse
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Register;
