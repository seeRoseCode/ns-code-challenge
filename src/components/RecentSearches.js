import React, { Component } from 'react'

class RecentSearches extends Component{

  renderRecentComics = (recentComicsArray) => {
    //select the last 5 comics searched and assign them to a new array
    let array = recentComicsArray.slice(Math.max(recentComicsArray.length - 5, 0))
    return array.map((comic) => {
        return(<li onClick={(e) => this.props.renderComic(e, comic)}>{comic.title}</li>)
    })
  }

  render(){
    return(
      <div>
        {
        //only render header if there are recent comics to display
        }
        { this.props.recentComics.length > 0 ? <h3>Recent Comics</h3> : null }
        <ul>
          {this.renderRecentComics(this.props.recentComics)}
        </ul>
      </div>
    )

  }
}



export default RecentSearches;
