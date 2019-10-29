import React, { Component } from 'react'

class RecentSearches extends Component{

  renderRecentComics = (recentComicsArray) => {
    return recentComicsArray.map((comic) => {
        return(<li onClick={(e) => this.props.renderComic(e, comic)}>{comic.title}</li>)
    })
  }

  render(){
    return(
      <div>
        <ul>
          {this.renderRecentComics(this.props.recentComics)}
        </ul>
      </div>
    )

  }
}



export default RecentSearches;
