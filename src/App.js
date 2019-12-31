import React from 'react';
import './App.css';
import LoginForm from './LoginForm'
import UserHeader from './UserHeader'
import PoemsContainer from './PoemsContainer'
import NewPoemForm from './NewPoemForm'

class App extends React.Component {
  state = { 
    poems: [],
    username: '',
    loggedIn: false
  }
  
componentDidMount(){
  fetch('http://localhost:3000/poems')
  .then(resp => resp.json())
  .then(poems =>{
    console.log(poems)
    this.setState({
      poems: poems
    })
  })
}
 
handleChange = (e) =>{
  console.log(e.target.value)
  this.setState({
      username: e.target.value
  })
}

loggedInScreen=()=>{
  this.setState({ loggedIn: true})
}

showLogin=()=>{
  this.setState({
    loggedIn: false,
    username: ''
  })
  }


  addPoem=(data)=>{
    this.setState({
      poems: [...this.state.poems, data]
    })
  }

  render(){
    if(this.state.loggedIn){
      return (
          <div className="app">
            <div className="sidebar">
            <UserHeader username={this.state.username}
                        showLogin={this.showLogin}
                        />
            <NewPoemForm />
          </div>
          <PoemsContainer poems={this.state.poems} />
        </div>
      )}
    else {
      return (
          <div className="app">
            <div className="sidebar">
              <LoginForm handleSubmit={this.handleSubmit} 
                          handleChange={this.handleChange} 
                          username={this.state.username}
                          loggedInScreen={this.loggedInScreen}/>
              <NewPoemForm poems={this.state.poems} addPoem={this.addPoem}/>
            </div>
            <PoemsContainer poems={this.state.poems} />
          </div>
          ); 
      }
    }
}

export default App;
