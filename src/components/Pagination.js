import React, { Component } from 'react'


export default class Pagination extends Component {
  state = {
    first: '',
    previous: '',
    next: '',
    last: ''
  }
  
  showLinks = (links) => {
    if(links){
      return (
        <div className="links">
          <button className="btn">{links.first}</button>
          <button className="btn">{links.previous}</button>
          <button className="btn">{links.next}</button>
          <button className="btn">{links.last}</button>
        </div>
      )
    }
  }


  render() {
    return (
      <div>
        {this.showLinks(this.props.links)}      
      </div>
    )
  }
}
