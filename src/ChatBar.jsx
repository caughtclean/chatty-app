import React, {Component} from 'react';
class ChatBar extends Component {
 constructor(props) {
    super(props);
    this.state = {value: ''};


    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    if (event.key === "Enter") {
      this.props.test(event.target.value, this.props.currentUser);
    }

    else {
     this.setState({value: event.target.value});
     console.log(this.state.value)
    }




  }

  // handleSubmit(event) {
  //   if (event.key === "Enter") {
  //   console.log("text submited" + this.state.value);
  //   }

  // }

  render() {
    console.log("Rendering ChatBar")
    return (
   <footer>
    <form>
      <input id="username" type="text" placeholder="Your Name (Optional)" value={this.props.currentUser}
      onChange={this.handleChange} />
      <input id="new-message" type="text"
        onKeyPress={this.handleChange}
        placeholder="Type a message and hit ENTER" />
    </form>
  </footer>
     );
  }
}
export default ChatBar;





