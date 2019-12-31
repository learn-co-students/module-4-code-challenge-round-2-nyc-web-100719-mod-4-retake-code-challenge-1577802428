import React from 'react';

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: ""
  }

  handleChange = (e)=>{
    e.persist()
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    let poem = {title: this.state.title, content: this.state.content}
    this.props.newPoem(poem)
  }

  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form">
          <input name="title" placeholder="Name your masterpiece..." value={this.state.title} onChange={this.handleChange}/>
          <textarea name="content" placeholder="Your masterpiece belongs here..." value={this.state.content} onChange={this.handleChange}/>
          <input type="submit" value="Share your masterpiece" onClick={this.handleSubmit}/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;