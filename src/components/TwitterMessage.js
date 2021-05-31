import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      remainingCharacters: props.maxChars,
      message: ""
    };
  }

  handleChange = (event) => {
    let remainingCharacters = this.props.maxChars - event.target.value.length
    this.setState({
      message: event.target.value,
      remainingCharacters: remainingCharacters
    })
  }

  render() {
    return (
      <div>
        <p>Remaining Characters: {this.state.remainingCharacters}</p>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.message}/>
      </div>
    );
  }
}

export default TwitterMessage;
