import React from 'react';

class LoginForm extends React.Component {

  state = {
    username: ''
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render(){
    return (
      <div className="login">
        <form className="login-form">
          <input placeholder="Enter a username..." onChange={this.handleChange}/>
          <input type="submit" value="Log In" onClick={() => this.props.handleLogin(this.state.username)}/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;