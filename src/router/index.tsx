import Layout from "../pages/layout";
import Login from "../pages/login";

const routes = [
  // 公共布局页面
  {
    path: "/",
    element: <Layout />,
  },
  // 登录
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
