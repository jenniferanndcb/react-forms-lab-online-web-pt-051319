import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          onChange={event => this.handleInput(event)}
          value={this.state.message}
          id="message"
        />
        <br/>
        <small>{this.props.maxChars - this.state.message.length} characters remaining</small>
      </div>
    );
  }
}

export default TwitterMessage;
