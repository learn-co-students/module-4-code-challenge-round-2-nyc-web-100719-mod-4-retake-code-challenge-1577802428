import React from 'react';

class LoginForm extends React.Component {

  
  render(){
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.props.loggedInScreen}>
          <input placeholder="Enter a username..." value={this.props.username} onChange={this.props.handleChange}/>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;