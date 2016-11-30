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

    this.test = this.test.bind(this)
  };


      test (chatinput, username) {
        const newMessage = {id: Math.random(), username: username, content: chatinput};
        const messages = this.state.messages.concat(newMessage)
        this.setState({messages: messages})
        console.log(chatinput)
      }



  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    }, 3000);
  }

  render() {
    console.log("Rendering <App/>");
    return (
      <div>
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name}
                 test={this.test}/>
      </div>
    );
  }
}

export default App;
