import React from 'react';

class NewPoemForm extends React.Component {

  state = {
    title: "",
    content: "",
    author: ""
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    
    })
  }
  
//to add conditional, if !this.props.username === ""
  render(){
    
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={ (e) =>
            this.props.handleNewPoemSubmit(e, this.state)}>

          <input placeholder="Name your masterpiece..."
          name="title"
          onChange={this.onChange}
          value={this.state.title} />

          <textarea placeholder="Your masterpiece belongs here..."
          name="content"
          onChange={this.onChange} 
          value={this.state.content} />

            <input placeholder="Type your name"
          name="author"
          onChange={this.onChange} 
          value={this.state.author} />
          <input type="submit" value="Share your masterpiece" />
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;