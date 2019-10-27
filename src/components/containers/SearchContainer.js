import React, { Component } from 'react'
import SearchForm from '../SearchForm'

class SearchContainer extends Component{

  state = {
    result: null,
  }

  //dynamically create the SKCD url using the user's input
  handleSubmit = (e) => {
    e.preventDefault()
    let searchInput = e.target.children[0].value
    let XKCDURL = `https://xkcd.now.sh/?comic=${searchInput}`
    // debugger
    // console.log("search Input: ", e.target.children[0].value)
    // console.log("complete URL: ", XKCDURL)
    this.fetchComic(XKCDURL)
  }


  fetchComic = (comicUrl) => {
    fetch(comicUrl)
    .then(res => res.json())
    // .then(res => console.log("search result: ", res))
    .then(res => this.setState({...this.state, result: res}))
  }

  render(){
    return(
      <div>
        <h2>Find your Favorite Comic!</h2>
        <h3>Choose a number 1 - 2219</h3>
        <SearchForm handleSubmit={this.handleSubmit}/>
        <br/><br/><br/>
        {this.state.latest ? <h1>{this.state.result.title}</h1> : null}
        {
        // Accommodation for async. Check that state has been assigned before attempting to render image
        this.state.result ? <img className="searchImage" title={this.state.result.alt} alt={this.state.result.title} src={this.state.result.img}/> : null
        }
      </div>
    )
  }
}

export default SearchContainer;
