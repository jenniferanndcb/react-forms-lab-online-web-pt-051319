import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state.username, this.state.password);
    }
  };

  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              onChange={event => this.handleChange(event)}
              type="text"
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              onChange={event => this.handleChange(event)}
              type="password"
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
