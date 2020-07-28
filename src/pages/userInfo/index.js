import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getUserInfo } from "actions/userInfo";
import { Helmet } from "react-helmet";

class UserInfo extends PureComponent {
  render() {
    const { userInfo = {} } = this.props.UserInfo;
    console.log("UserInfo -> render -> this.props", this.props);
    return (
      <div>
        <Helmet>
          <title>User</title>
        </Helmet>
        {
          <div>
            <p>用户信息： </p>
            <p>用户名： {userInfo.name || "默认"}</p>
            <p>介绍： {userInfo.intro || "简介"}</p>
          </div>
        }
        <button onClick={() => this.props.getUserInfo()}>获取数据</button>
      </div>
    );
  }
}

export default connect(userInfo => userInfo, { getUserInfo })(UserInfo);
