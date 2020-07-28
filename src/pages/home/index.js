import React, { PureComponent } from "react";
import { Helmet } from "react-helmet";

export default class extends PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <span>this home ~</span>

        <img
          src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1595844717&di=6575b56477fdd57f805389fad0c523cf&src=http://dmimg.5054399.com/allimg/pkm/pk/13.jpg"
          alt=""
        />
      </div>
    );
  }
}
