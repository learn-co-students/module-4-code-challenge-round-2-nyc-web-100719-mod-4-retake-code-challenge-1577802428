import React from 'react';

class Poem extends React.Component {

  state = {
    read: false
  }

  toggleRead = ()=>{
    this.setState({read: !this.state.read})
  }

  render(){
    return (
      <div style={this.state.read ? {color: "green"} : {color: "black"}} onClick={this.toggleRead}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <strong>- By {this.props.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
