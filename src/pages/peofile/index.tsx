import { Link, useNavigate } from "react-router-dom";

import styles from "./index.module.scss";
import Icon from "@/compontents/icon";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { getUserAction } from "@/store/actions/profile";
import { profileState } from "@/store/modules/profile";

const Profile = () => {
  const history = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // 1\获取登录用户信息
    dispatch(getUserAction());
  }, []);
  // 2、从redux获取用户信息
  // 写法一：类型注解
  // const {
  //   user: { photo, name, like_count, follow_count, fans_count, art_count },
  // } = useSelector((state: RootState) => state.profile);
  // 写法二：泛型
  // 写法一：类型注解
  const {
    user: { photo, name, like_count, follow_count, fans_count, art_count },
  } = useSelector<RootState, profileState>(state => state.profile);

  return (
    <div className={styles.root}>
      <div className="profile">
        {/* 个人信息 */}
        <div className="user-info">
          <div className="avatar">
            {/* 用户头像 */}
            <img src={photo || "http://toutiao.itheima.net/images/user_head.jpg"} alt="" />
          </div>
          {/* 用户名 */}
          <div className="user-name">{name}</div>
          <Link to="/profile/edit">
            个人信息 <Icon type="iconbtn_right" />
          </Link>
        </div>

        {/* 今日阅读 */}
        <div className="read-info">
          <Icon type="iconbtn_readingtime" />
          今日阅读
          <span>10</span>
          分钟
        </div>

        {/* 动态 - 对应的这一行 */}
        <div className="count-list">
          <div className="count-item">
            <p>{art_count}</p>
            <p>动态</p>
          </div>
          <div className="count-item">
            <p>{follow_count}</p>
            <p>关注</p>
          </div>
          <div className="count-item">
            <p>{fans_count}</p>
            <p>粉丝</p>
          </div>
          <div className="count-item">
            <p>{like_count}</p>
            <p>被赞</p>
          </div>
        </div>

        {/* 消息通知 - 对应的这一行 */}
        <div className="user-links">
          <div className="link-item">
            <Icon type="iconbtn_mymessages" />
            <div>消息通知</div>
          </div>
          <div className="link-item">
            <Icon type="iconbtn_mycollect" />
            <div>收藏</div>
          </div>
          <div className="link-item">
            <Icon type="iconbtn_history1" />
            <div>浏览历史</div>
          </div>
          <div className="link-item">
            <Icon type="iconbtn_myworks" />
            <div>我的作品</div>
          </div>
        </div>
      </div>

      {/* 更多服务 */}
      <div className="more-service">
        <h3>更多服务</h3>
        <div className="service-list">
          <div className="service-item">
            <Icon type="iconbtn_feedback" />
            <div>用户反馈</div>
          </div>
          <div className="service-item" onClick={() => history("/chat")}>
            <Icon type="iconbtn_xiaozhitongxue" />
            <div>小智同学</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
