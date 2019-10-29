import React, { Component } from 'react'
import SearchForm from '../SearchForm'
import RecentSearches from '../RecentSearches'
let XKCDURL = `https://xkcd.now.sh/?comic=`


class SearchContainer extends Component{

  state = {
    result: {},
    recentComics: []
  }


  //dynamically create the SKCD url using the user's input
  handleSubmit = (e) => {
    e.preventDefault()
    let searchInput = e.target.children[0].value
    this.handleError(searchInput)
    let XKCDURL = `https://xkcd.now.sh/?comic=${searchInput}`
    // XKCDURL += searchInput
    this.fetchComic(XKCDURL)
  }

  //fetch user's chosen comic and assign to state
  fetchComic = (comicUrl) => {
    fetch(comicUrl)
    .then(res => res.json())
    //when setting state, only add :title, :img, and :num for reference for recent comics
    .then(res => this.setState({result: res, recentComics: [...this.state.recentComics, {title: res.title, num: res.num, img: res.img}]}))

  }


  //ensures that user input is a number that corresponds to an actual comic
  handleError = (num) => {
    let n = parseInt(num)
    if (n === 404)
      alert("404 NOT FOUND! Please choose another number")
    else
    return(
      parseInt(num) !== NaN && n > 0 && n < 2219 ? true : alert("please enter a number 1-2219")
    )
  }

  renderComic = (e, comic) => {
    e.preventDefault()
    // debugger
    console.log("see ROSE code")
    this.fetchComic(`https://xkcd.now.sh/?comic=${comic.num}`)
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
        <RecentSearches recentComics={this.state.recentComics} renderComic={this.renderComic}/>
      </div>
    )
  }
}

export default SearchContainer;
