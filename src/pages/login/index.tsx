import { Button, Form, Input, InputRef, Toast } from "antd-mobile";
import { LoginFormData } from "@/types/data";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import styles from "./index.module.scss";
import { loginAction } from "@/store/actions/login";
import { useNavigate } from "react-router-dom";
// axios提供的错误类型
import { AxiosError } from "axios";
import { useEffect, useRef, useState } from "react";
import { getCodeApi } from "@/api/login";
import { setInterval } from "timers/promises";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const nav = useNavigate();
  // 获取表单实例
  const [form] = Form.useForm();
  // 获取手机号输入框实例对象
  const mobileRef = useRef<InputRef>(null);
  // 1、提交登录
  const onFinish = async (formData: LoginFormData) => {
    try {
      await dispatch(loginAction(formData));
      Toast.show({
        icon: "success",
        content: "登录成功",
      });
      nav("/");
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      Toast.show({
        icon: "fail",
        content: _error.response?.data.message,
      });
    }
  };
  // 2、发送验证码
  const [count, setCount] = useState(0);
  // 储存定时器id
  const timeId = useRef(0);
  const sendCode = async () => {
    /**
     * 1、校验手机号格式（是否空、是否正确）-----错误的话，让手机号输入框获取焦点
     *   通过getFieldValue  getFielError 获取表单name值和name格式错误
     * 2、输入正确：调用后接口（参数：手机号），调用运营商接口，发送短信
     * 3、用户手机号收到短信，填写后，进行登录
     */
    // 获取手机号
    const mobile = form.getFieldValue("mobile") || "";
    // 获取手机号输入格式错误
    const isError = form.getFieldError("mobile").length > 0;
    if (!mobile.trim() || isError) {
      mobileRef.current!.focus();
      return;
    }
    // 发短信
    try {
      await getCodeApi(mobile);
      /**
       * 开启倒计时流程：
       * 1、倒计时状态：60s
       * 2、== 发送短信后：立即开启倒计时 ==
       * 3、倒计时状态等于0：清楚定时器
       */
      setCount(60);
      window.setInterval(() => {
        setCount(ct => ct - 1);
      }, 1000);
    } catch (error) {}
  };
  // 清理定时器倒计时--1、count=0  2、组件销毁
  useEffect(() => {
    if (count === 0) {
      clearInterval(timeId.current);
    }
  }, [count]);
  useEffect(() => {
    return () => {
      clearInterval(timeId.current);
    };
  }, []);
  return (
    <div className={styles.root}>
      <div className="login-form">
        <h2 className="title">账号登录</h2>
        {/* 表单 */}
        <Form form={form} onFinish={onFinish}>
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
            <Input ref={mobileRef} placeholder="请输入手机号" />
          </Form.Item>
          {/* 验证码 */}
          <Form.Item
            name="code"
            rules={[
              { len: 6, message: "验证码6个字符" },
              { required: true, message: "请输入验证码" },
            ]}
            className="login-item"
            extra={
              <span onClick={count === 0 ? sendCode : undefined} className="code-extra">
                {count === 0 ? "发送验证码" : `${count}秒后重新发送`}
              </span>
            }
          >
            <Input placeholder="请输入验证码" autoComplete="off" />
          </Form.Item>
          {/* 提交按钮 */}
          {/* noStyle 表示不提供 Form.Item 自带的样式 */}
          <Form.Item shouldUpdate noStyle>
            {() => (
              <Button
                block
                type="submit"
                color="primary"
                className="login-submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
              >
                登 录
              </Button>
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
