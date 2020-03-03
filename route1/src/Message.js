import React from "react";
import { Link } from "react-router-dom";
import App from './App';


class Message extends React.Component {
  render() {
    return (
      <div>
        <App />
        <h2>It is the Message Page</h2>
        <ul className="messageList">
            <li className="message1"><Link to="/message/message1">Message-1</Link></li>
            <li className="message1"><Link to="/message/message2">Message-2</Link></li>
            <li className="message1"><Link to="/message/message3">Message-3</Link></li>
            <li className="message1"><Link to="/message/message4">Message-4</Link></li>
        </ul>
      </div>
    );
  }
}
export default Message;
