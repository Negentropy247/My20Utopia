import Home from "@/pages/home";
import Layout from "../pages/layout";
import Login from "../pages/login";
import Question from "@/pages/question";
import Profile from "@/pages/peofile";
import Video from "@/pages/video";

// 导入子页面

const routes = [
  // 公共布局页面
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/qusetion",
        element: <Question />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/video",
        element: <Video />,
      },
    ],
  },
  // 登录
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
