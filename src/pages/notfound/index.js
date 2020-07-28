import React, { Component } from "react";
import { Result, Button } from "antd";
import { Helmet } from "react-helmet";

class NotFound extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Not Found</title>
        </Helmet>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
        />
      </>
    );
  }
}

export default NotFound;
