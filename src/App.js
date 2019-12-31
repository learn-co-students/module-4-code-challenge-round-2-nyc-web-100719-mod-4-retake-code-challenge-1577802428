import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    loggedIn: false,
    username: "",
    poems: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/poems")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      this.setState({poems: data})
    })
  }

  logIn = (newUser)=>{
    this.setState({loggedIn: true, username: newUser})
  }

  logOut = ()=>{
    this.setState({loggedIn: false, username: ""})
  }

  newPoem = (poem)=>{
    poem.author = this.state.username
    let poemsCopy = [...this.state.poems]
    poemsCopy.push(poem)
    this.setState({poems: poemsCopy})
  }

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {
            this.state.loggedIn 
            ? 
              <React.Fragment>
                <UserHeader username={this.state.username} logOut={this.logOut}/>
                <NewPoemForm newPoem={this.newPoem}/>
              </React.Fragment>
            : 
              <LoginForm logIn={this.logIn}/>
          }
        </div>
        <PoemsContainer poems={this.state.poems}/>
      </div>
    ); 
  }
}

export default App;
