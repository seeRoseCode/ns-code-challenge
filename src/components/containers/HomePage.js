import React, {Component} from 'react'
const latestURL = "https://xkcd.now.sh/?comic=latest"

class HomePage extends Component{

  state = {
    latest: []
  }

  componentDidMount(){
    this.fetchLatest()
  }

  //fetch the lastest comic image from the provided API proxy url and assign it to state
  fetchLatest = () => {
    fetch(latestURL)
    .then(res => res.json())
    // .then(res => console.log("results: ", res))
    .then(res => this.setState({latest: res}))
  }

  render(){
    return(
        <div>
          {
          //Accommodation for async. Check that state has been assigned before attempting to render image
          this.state.latest ? <img className="latestImage" title={this.state.latest.alt} alt={this.state.latest.title} src={this.state.latest.img}/> : null
          }
        </div>
    )
  }

}

export default HomePage;
