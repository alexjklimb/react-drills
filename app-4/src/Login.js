import React, { Component } from "react";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };}
  handleUsernameChange(name) {
    this.setState({ username: name });
  }
  handlePasswordChange(pass) {
    this.setState({ password: pass });
  }
  handleLogin=()=> {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }
  render() {
    return (
      <div>
        <input onChange={input => this.handleUsernameChange(input.target.value)}/>
        <input onChange={input => this.handlePasswordChange(input.target.value)}/>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}
export default Login;