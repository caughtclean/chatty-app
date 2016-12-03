import React, {Component} from 'react';
import MessageList from './messageList.jsx';
import ChatBar from './ChatBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      messages: [],
    };


    this.sendMessage = this.sendMessage.bind(this)
    this.sendUser = this.sendUser.bind(this)
  };


  sendMessage(chatinput, username) {
    var message = {type: "newMessage",username: username, content: chatinput}
    this.socket.send(JSON.stringify(message))
  }

  sendUser(user) {
    var user = {type: "newUser", user}
    this.socket.send(JSON.stringify(user))
  }



  componentDidMount() {

    this.socket = new WebSocket("ws://localhost:4000");
    console.log("conntected to socket server")

    this.socket.onmessage = (event) =>  {
      const data = JSON.parse(event.data)
      if (data.type === 'newMessage') {
        const newMessages = JSON.parse(event.data)
        const messages = this.state.messages.concat(newMessages)
        this.setState({messages: messages})
      }
      if (data.type === 'newUser') {
        const user = JSON.parse(event.data)
        this.setState({messages: this.state.messages.concat(user)})
     }
      if (data > 0) {
        this.setState({Usersonline: data})
      }



     // }else {

      //   this.setState({Usersonline: data})

      // }


      };
    }


  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
          <div>
         Users Online: {this.state.Usersonline}
          </div>
        </nav>
        <MessageList
          messages={this.state.messages}
          user={this.state.user}
          currentUser={this.state.currentUser}
          />
        <ChatBar
          currentUser={this.state.currentUser}
          sendMessage={this.sendMessage}
          sendUser={this.sendUser}
          />
      </div>
    );
  }
}

export default App;