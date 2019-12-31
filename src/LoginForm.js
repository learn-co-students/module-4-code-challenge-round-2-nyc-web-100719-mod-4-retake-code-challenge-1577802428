import React from 'react';

class LoginForm extends React.Component {

  state = {
    username: ""
  }

  handleChange = (e)=>{
    e.persist()
    this.setState({username: e.target.value})
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    this.props.logIn(this.state.username)
  }

  render(){
    return (
      <div className="login">
        <form className="login-form">
          <input type="text" placeholder="Enter a username..." onChange={this.handleChange} value={this.state.username}/>
          <input type="submit" value="Log In" onClick={this.handleSubmit}/>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;