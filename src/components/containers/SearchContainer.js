import React, { Component } from 'react'
import SearchForm from '../SearchForm'
class SearchContainer extends Component{

  state = {
    result: {},
  }


  //dynamically create the SKCD url using the user's input
  handleSubmit = (e) => {
    e.preventDefault()
    let searchInput = e.target.children[0].value
    this.handleError(searchInput)
    let XKCDURL = `https://xkcd.now.sh/?comic=${searchInput}`
    this.fetchComic(XKCDURL)
  }

  //fetch user's chosen comic and assign to state
  fetchComic = (comicUrl) => {
    fetch(comicUrl)
    .then(res => res.json())
    .then(res => this.setState({result: res}))
  }

  //ensures that user input is a number that corresponds to an actual comic
  handleError = (num) => {
    return(
      parseInt(num) !== NaN && num > 0 && num < 2219 ? true : alert("please enter a number 1-2219")
    )
  }

  render(){

    let result = this.state.result
    let date = `${result.month} / ${result.day} / ${result.year}`

    return(
      <div>
        <h2>Find your Favorite Comic!</h2>
        <h5>(Choose a number 1 - 2219)</h5>
        <SearchForm handleSubmit={this.handleSubmit}/>
        <br/><br/><br/>
        {
          // Accommodation for async. Check that state has been assigned before attempting to render data
        }
        {this.state.result ? <h1>{result.title}</h1> : null}
        {this.state.result ? <img className="searchImage" title={result.alt} alt={result.title} src={result.img}/> : null}
        {date.includes("undefined") ? null :  <h3>{date}</h3>}
      </div>
    )
  }
}

export default SearchContainer;
