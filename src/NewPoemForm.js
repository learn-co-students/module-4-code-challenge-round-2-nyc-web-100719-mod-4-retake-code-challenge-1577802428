import React from 'react';

class NewPoemForm extends React.Component {

  state = {
    title: '',
    content: '',
    author: ''
  }

  handleTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleContent = (e) => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.props.user){
      const { title, content } = this.state
      fetch(`http://localhost:3000/poems`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          accepts: 'application/json'
        },
        body: JSON.stringify({
          title: title,
          content: content,
          author: this.props.user
        })
      })
      .then(resp => resp.json())
      .then(poem => {
        this.props.addPoem(poem)
      })
      this.setState({
        title: '',
        content: '',
        author: ''
      })
    } else {
      alert('Not logged in')
      this.setState({
        title: '',
        content: '',
        author: ''
      })
    }
  }


  render(){
    const { title, content } = this.state
    return (
      <div className="new-poem">
        <form className="new-poem-form">
          <input placeholder="Name your masterpiece..." name="title" value={title} onChange={this.handleTitle}/>
          <textarea placeholder="Your masterpiece belongs here..." name="content" value={content} onChange={this.handleContent}/>
          <input type="submit" value="Share your masterpiece" onClick={this.handleSubmit}/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;