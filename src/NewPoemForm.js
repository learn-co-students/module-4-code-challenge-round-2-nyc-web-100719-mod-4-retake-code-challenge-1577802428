import React from 'react';

class NewPoemForm extends React.Component {

  state= {
    title: '',
    content: ''
  }

  handleChange=(e)=>{
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
    // this.setState({
    //   title: e.target.title.value,
    //   content: e.target.content.value
    // })
  }

  //on submit, call functio addPoem that was passed as props and argument of the new poem
      //newPoem is inputs

  handleSubmit=(e)=>{
    e.preventDefault()
    let {title,content} = this.state;
    fetch('http://localhost:3000/poems', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              "Accept": 'application/json'
          }, 
          body: JSON.stringify({
              title,content
          })
    })
    .then(resp=> resp.json())
    .then(data=>{
      this.props.addPoem(data)
    })
    this.setState({
        title: '',
        content: ''
    })
  }
  

  render(){
    return (
      <div className="new-poem">
        <form className="new-poem-form" onSubmit={this.handleSubmit}>
          <input placeholder="Name your masterpiece..." ref={(ref) => this.title= ref} name="title" value= {this.state.title} placeholder="title" onChange={this.handleChange}/>
          <textarea placeholder="Your masterpiece belongs here..." name="content" value= {this.state.content} placeholder="content" onChange={this.handleChange} />
          <input type="submit" value="Share your masterpiece"/>
        </form>
      </div>
    ); 
  }
}

export default NewPoemForm;