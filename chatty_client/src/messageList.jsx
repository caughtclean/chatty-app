import React, {Component} from 'react';
import Message from './message.jsx';


class MessageList extends Component {
  render() {
  console.log("Rendering messageList");
    return (
    <div id="message-list">
    {this.props.messages.map (function (message, index) {
        return <Message
        key={index}
        username={message.username}
        content={message.content}/>
      })
    }

    <div className="message system">
    </div>
  </div>
     );
  }
}
export default MessageList;









