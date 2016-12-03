import React, {Component} from 'react';
import Message from './message.jsx';


class MessageList extends Component {
  render() {
  var currentUserName;
  console.log("Rendering messageList");
    return (
    <div id="message-list">
      {this.props.messages.map(function (message, index) {
        var username = "Anonymous";
        if (message.username != "") {username = message.username}
        if (message.type === 'newMessage') {
          currentUserName = username;
          return <Message
          key={index}
          username={username}
          content={message.content}/>
        }else {
          if (currentUserName != message.user) {
            return <div className="message system">

             {currentUserName} changed their name to {message.user}
              }
            </div>
          }
        }
        })
      }

      <div className="message system">

      </div>
    </div>
     );
  }
}
export default MessageList;









