import React from 'react';

class Poem extends React.Component {

  state = {
    read: false
  }

  toggleRead = ()=>{
    this.setState({read: !this.state.read})
  }

  favorite = ()=>{
    let poem = {
      title: this.props.title,
      content: this.props.content,
      author: this.props.author
    }

    this.props.favorite(poem)
  }

  render(){
    return (
      <div style={this.state.read ? {color: "green"} : {color: "black"}} onClick={this.toggleRead}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <p><strong>- By {this.props.author}</strong></p>
        <button onClick={this.favorite}>❤️</button>
      </div>
    ); 
  }
}

export default Poem;
