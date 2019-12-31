import React from 'react';

class Poem extends React.Component {

  state = {
    color: "black"
  }

  toggleColor = () => {
    if(this.state.color === "black"){
      this.setState({
        color: "red"
      })
    } else if (this.state.color === "red"){
      this.setState({
        color: "black"
      })
    }
  }
  
  render(){
    return (
      <div style={{color: this.state.color}} onClick={this.toggleColor}>
        <h3>Title: {this.props.poem.title}</h3>
        <p>Content: {this.props.poem.content}</p>
        <strong>- By Author: {this.props.poem.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
