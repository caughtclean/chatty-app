import React, {Component} from 'react';
import MessageList from './messageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"},
      messages: []
    };

    this.sendMessage = this.sendMessage.bind(this)
    this.sendUser = this.sendUser.bind(this)
  };


  sendMessage(chatinput, username) {
    var message = {username: username, content: chatinput}
    this.socket.send(JSON.stringify(message))
  }

  sendUser(user) {
    var user = {currentUser: user}
    this.socket.send(JSON.stringify(user))
  }



  componentDidMount() {

    this.socket = new WebSocket("ws://localhost:4000");
    console.log("conntected to socket server")

    this.socket.onmessage = (event) =>  {
      console.log('event data', event.data);
      const newMessages = JSON.parse(event.data);
      const messages = this.state.messages.concat(newMessages);
      this.setState({messages: messages});
      this.setState({currentUser: {name: newMessages.username}})
    };
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList
          messages={this.state.messages}
          />
        <ChatBar
          currentUser={this.state.currentUser.name}
          sendMessage={this.sendMessage}
          sendUser={this.sendUser}
          />
      </div>
    );
  }
}

export default App;
