import React, { Component } from 'react'

class RecentSearches extends Component{

  renderRecentComics = (recentComicsArray) => {
    //select the last 5 comics searched and assign them to a new array
    let array = recentComicsArray.slice(Math.max(recentComicsArray.length - 5, 0))
    return array.map((comic) => {
        // return(<li onClick={(e) => this.props.renderComic(e, comic)}>{comic.title}</li>)
        return <img src={comic.img} style={iconStyle} alt={comic.title} onClick={(e) => this.props.renderComic(e, comic)}/>
    })
  }

  render(){
    return(
      <div>
        {
        //only render header if there are recent comics to display
        }
        { this.props.recentComics.length > 0 ? <h3>Recent Comics</h3> : null }
        {this.renderRecentComics(this.props.recentComics)}
      </div>
    )

  }
}

let iconStyle = {
  height: "100px",
  width: "100px",
  border: "lightGrey solid 5px"
}


export default RecentSearches;
