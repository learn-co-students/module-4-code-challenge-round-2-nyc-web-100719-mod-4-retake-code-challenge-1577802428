import React from 'react';

class Poem extends React.Component {
  state={
    color:"black"
  }

  changeColor=(e)=>{
    if(this.state.color==='black'){
      this.setState({
        color: "red"
      })
    }
    else{
      this.setState({
        color: "black"
      })
    }
  }
  
  render(){
    return (
      <div style={{color: this.state.color}} onClick={this.changeColor}>
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <strong>- {this.props.poem.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
