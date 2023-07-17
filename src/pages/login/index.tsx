import { Button, NavBar, Form, Input } from "antd-mobile";
import styles from "./index.module.scss";
import { LoginFormData } from "@/types/data";
import { useDispatch } from "react-redux";
import { loginAction } from "@/store/modules/login";
import { AppDispatch } from "@/store";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  // 提交登录
  const onFinish = async (formData: LoginFormData) => {
    try {
      await dispatch(loginAction(formData));
    } catch (error) {}
  };
  return (
    <div className={styles.root}>
      <div className="login-form">
        <h2 className="title">账号登录</h2>
        {/* 表单 */}
        <Form onFinish={onFinish}>
          {/* 手机号 */}
          <Form.Item
            name="mobile"
            rules={[
              { required: true, message: "请输入手机号" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号格式错误",
              },
            ]}
            className="login-item"
          >
            <Input placeholder="请输入手机号" />
          </Form.Item>
          {/* 验证码 */}
          <Form.Item
            name="code"
            rules={[
              { len: 6, message: "验证码6个字符" },
              { required: true, message: "请输入验证码" },
            ]}
            className="login-item"
            extra={<span className="code-extra">发送验证码</span>}
          >
            <Input placeholder="请输入验证码" autoComplete="off" />
          </Form.Item>
          {/* 提交按钮 */}
          {/* noStyle 表示不提供 Form.Item 自带的样式 */}
          <Form.Item noStyle>
            <Button block type="submit" color="primary" className="login-submit">
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
