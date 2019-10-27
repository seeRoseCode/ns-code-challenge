import React, {Component} from 'react'

class NavBar extends Component{

  render(){
    return(
      <div>
        <nav>
          <button className="latest" ><a href='/'>Latest</a></button>
          <button className="search" ><a href='/search'>Search</a></button>
        </nav>
      </div>
    )
  }

}


export default NavBar;
