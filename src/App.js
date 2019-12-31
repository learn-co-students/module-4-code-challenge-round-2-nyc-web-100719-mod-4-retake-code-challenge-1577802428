import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {

  state = {
    allPoems: [],
    username: ""
  }

    componentDidMount() {
      fetch('http://localhost:3000/poems')
      .then(resp => resp.json())
      .then(poemData => this.setState({
        allPoems: poemData
      }) )
    }


    handleLoginSubmit = (e, username) => {
      e.preventDefault()
      console.log(username)
      this.setState({
        username: username
      })

    }

    logout = () => {
      this.setState({
        username: ""
      })
    }

    handleNewPoemSubmit = (e, newPoem) => {
      e.preventDefault()
      
      console.log(newPoem)
      this.setState({
        allPoems: [...this.state.allPoems, newPoem]
      })
    }

    // renderPoemForm = () => {
    //   if (!this.state.username === "") {
    //   <NewPoemForm username={this.state.username} />
    //  } else if (this.state.username === "")  {
    //    null
    //  }
    // }

  render(){
    return (
      <div className="app">
        <div className="sidebar">
          {this.state.username === "" ?
          <LoginForm handleLoginSubmit={this.handleLoginSubmit} />:
          <UserHeader username={this.state.username} logout={this.logout} />}

          {/* {!this.state.username === "" ? */}
          <NewPoemForm username={this.state.username} handleNewPoemSubmit={this.handleNewPoemSubmit} />
          {/* null } */}
        </div>
        <PoemsContainer allPoems={this.state.allPoems} username={this.state.username} />
      </div>
    ); 
  }
}

export default App;
