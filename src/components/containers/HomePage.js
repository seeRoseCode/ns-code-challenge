import React, {Component} from 'react'
const latestURL = "https://xkcd.now.sh/?comic=latest"

class HomePage extends Component{

  state = {
    latest: []
  }

  //on page load fetch the latest comic
  componentDidMount(){
    this.fetchLatest()
  }

  //fetch the lastest comic image from the provided API proxy url and assign it to state
  fetchLatest = () => {
    fetch(latestURL)
    .then(res => res.json())
    .then(res => this.setState({latest: res}))
  }

  render(){
    let latest = this.state.latest
    let date = `${latest.month} / ${latest.day} / ${latest.year}`

    return(
        <div>
          {
          //Accommodation for async. Check that state has been assigned before attempting to render image
          }
          {latest ? <h1>{latest.title}</h1> : null}
          {latest ? <img className="latestImage" title={latest.alt} alt={latest.title} src={latest.img}/> : null}
          {date.includes("undefined") ? null :  <h3>{date}</h3>}
        </div>
    )
  }

}

export default HomePage;
