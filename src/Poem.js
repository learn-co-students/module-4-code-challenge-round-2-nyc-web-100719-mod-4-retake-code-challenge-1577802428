import React from 'react';

class Poem extends React.Component {

  render(){

    return (
      <div style={{color: "black"}}>
        <h3>Title: {this.props.poem.title}</h3>
        
        <p>Content: {this.props.poem.content}</p>
        <strong>- By:{this.props.poem.author}</strong>
      </div>
    ); 
  }
}

export default Poem;
