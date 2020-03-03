import React from "react";

class Message extends React.Component {
  render() {
    console.log(this.props.match.params, "11111111111111111");
    return <div>{this.props.match.params.id}</div>;
  }
}
export default Message;
