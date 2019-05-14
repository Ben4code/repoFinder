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
        <div className="pagination">
          <button className="btn">
            <i className="fa fa-angle-double-left"></i>
          </button>
          <button className="btn">
            <i className="fa fa-arrow-left"></i>
          </button>
          <button className="btn">
            1
          </button>
          <button className="btn">
            <i className="fa fa-arrow-right"></i>
          </button>
          <button className="btn">
            <i className="fa fa-angle-double-right"></i>
          </button>
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
