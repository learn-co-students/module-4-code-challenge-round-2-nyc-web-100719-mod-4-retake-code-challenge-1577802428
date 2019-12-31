import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  renderPoems = () => {
   return this.props.allPoems.map(poem => <Poem poem={poem} username={this.props.username} />)
  }


  render(){
    return (
      <div className="poems-container">
        {
         /* render poems here*/
        }
        {this.renderPoems()}
      </div>
    ); 
  }
}

export default PoemsContainer;