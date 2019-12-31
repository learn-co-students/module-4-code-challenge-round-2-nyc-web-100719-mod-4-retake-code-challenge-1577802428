import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    allPoems: [],
    currentUser: null
  }
  
  componentDidMount(){
    fetch("http://localhost:3000/poems")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allPoems: data
      })
    })
  }

  handleLogin = (username) => {
    this.setState({
      currentUser: username
    })
  }

  handleLogout = () => {
    this.setState({
      currentUser: null
    })
  }

  addPoem = (poem) => {
    this.setState({
      allPoems: [...this.state.allPoems, poem]
    })
  }

// UserHeader should only display when a user has been logged in, 
//and LoginForm should only display when there is no user

  render(){
    if(this.state.currentUser){
      return (
        <div className="app">
          <div className="sidebar">
            <UserHeader user={this.state.currentUser} handleLogout={this.handleLogout}/>
            <NewPoemForm user={this.state.currentUser} addPoem={this.addPoem}/>
          </div>
          <PoemsContainer poems={this.state.allPoems}/>
        </div>
      ); 
    } else {
      return (
        <div className="app">
          <div className="sidebar">
            <LoginForm handleLogin={this.handleLogin}/>
            <NewPoemForm/>
          </div>
          <PoemsContainer poems={this.state.allPoems}/>
        </div>
      ); 
    }
  }
}

export default App;
