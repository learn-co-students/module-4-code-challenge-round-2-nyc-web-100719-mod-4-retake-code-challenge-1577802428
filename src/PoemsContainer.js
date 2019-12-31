import React from 'react';
import Poem from './Poem';

class PoemsContainer extends React.Component {

  state = {
    favoritePoems: []
  }

  renderPoems = (poems)=>{
    return poems.map((poem)=>{
      return <Poem {...poem} favorite={this.addToFavorite}/>
    })
  }

  addToFavorite = (poem)=>{
    let favoritePoemsCopy = [...this.state.favoritePoems]
    favoritePoemsCopy.push(poem)
    this.setState({favoritePoems: favoritePoemsCopy})
  }

  render(){
    return (
      <div className="poems-container">
        {
         this.renderPoems(this.props.poems)
        }
        <h1>FAVORITES</h1>
        {
         this.renderPoems(this.state.favoritePoems)
        }
      </div>
    ); 
  }
}

export default PoemsContainer;