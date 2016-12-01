import React, {Component} from 'react';
class ChatBar extends Component {
 constructor(props) {
    super(props);
    this.state = {
      value: "",
      user: props.currentUser
    };


    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmitText = this.handleSubmitText.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleSubmitUser = this.handleSubmitUser.bind(this);


  }

  handleSubmitText(event) {
    if (event.key === "Enter") {
      this.props.sendMessage(event.target.value, this.state.user);
    }
  }

  handleChangeText(event) {
     console.log(event.target.value)
     this.setState({value: event.target.value});
    }



  handleSubmitUser(event) {
    if (event.key === "Enter") {
      this.props.sendUser(event.target.value);
    }
  }

  handleChangeUser(event) {
    console.log(event.target.value)
    this.setState({user: event.target.value});

    }

  render() {
    console.log("Rendering ChatBar")
    return (
   <footer>
    <form>
      <input
        id="username"
        type="text"
        placeholder="Your Name (Optional)"
        value={this.state.user}
        onKeyPress={this.handleSubmitUser}
        onChange={this.handleChangeUser}
      />
      <input
        id="new-message"
        type="text"
        value={this.state.value}
        onKeyPress={this.handleSubmitText}
        onChange={this.handleChangeText}
        placeholder="Type a message and hit ENTER"
      />
    </form>
  </footer>
     );
  }
}
export default ChatBar;





