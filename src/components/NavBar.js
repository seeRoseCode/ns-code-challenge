import React, {Component} from 'react'

class NavBar extends Component{

  render(){
    return(
      <div>
        <nav style={navStyle}>
          <button className="latest" ><a href='/' style={buttonStyle}>Latest</a></button>
          <button className="search" ><a href='/search' style={buttonStyle}>Search</a></button>
        </nav>
      </div>
    )
  }

}

let navStyle = {
  padding: "20px",
  border: "lightGrey solid 5px"
}

let buttonStyle = {
  fontSize: "14px",
  padding: "20px"
}

export default NavBar;
