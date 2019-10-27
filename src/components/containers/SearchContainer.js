import React, { Component } from 'react'

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
    .then(res => this.setState({result: res}))
  }

  render(){
    return(
      <div>
        <h2>I'm the search container!</h2>
        <form  onSubmit={this.handleSubmit}>
          <input className="searchInput" type="text" name="search"/>
          <input className="searchSubmit" type="submit"/>
        </form>
        {
          this.state.result ? <img className="searchImage" title={this.state.result.alt} alt={this.state.result.title} src={this.state.result.img}/> : null
        }
      </div>
    )
  }
}

export default SearchContainer;
