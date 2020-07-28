import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";

export default class extends PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Page</title>
        </Helmet>
        <span>this page ~ ~</span>
      </div>
    );
  }
}
