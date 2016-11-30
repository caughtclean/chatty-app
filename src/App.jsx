import React, {Component} from 'react';
import MessageList from './messageList.jsx';
import ChatBar from './ChatBar.jsx';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?"
        },

        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    };
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name}/>
      </div>
    );
  }
}

export default App;
