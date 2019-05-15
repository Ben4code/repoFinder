import React, { Component } from 'react'



export default class Pagination extends Component {
  state = {
    links: {}
  }

  static getDerivedStateFromProps(props, state) {
    if (props.links !== state.links) {
      return { links: props.links };
    }
    else return null;
  }

  navClick = (url) => {
    this.setState({loading: true});    
    setInterval(()=>{
      this.props.paginationUrl(url);
    }, 800)    
    
    this.setState({loading: false});    
  }


  showLinks = (links) => {
    if (links) {
      return (
        <div>
          <button className={links.firstLink ? "btn" : "btn-disabled"}
            disabled={!links.firstLink ? true : false}
            onClick={() => this.navClick(links.firstLink)}
          > &lt;&lt;{links.prevPage === 0 ? null : 1 }  </button>

          <button className={links.prevLink ? "btn" : "btn-disabled"}
            disabled={!links.prevLink ? true : false}
            onClick={() => this.navClick(links.prevLink)}
          >&lt; {links.prevPage === 0 ? null : links.prevPage }</button>

          <button className="btn"> {links.currentPage} </button>

          <button className={links.nextLink ? "btn" : "btn-disabled"}
            disabled={!links.nextLink ? true : false}
            onClick={() => this.navClick(links.nextLink)}
          > {links.nextPage === links.searchCount ? null : links.nextPage } &gt;</button>

          <button className={links.lastLink ? "btn" : "btn-disabled"}
            disabled={!links.lastLink ? true : false}
            onClick={() => this.navClick(links.lastLink)}
          > &gt;&gt;</button>
        </div>
      )
    }
  }

  render() {

    return (
      <div className="pagination">
        <div className="pagination__links">
            {this.showLinks(this.state.links)}
        </div>
        <p>Showing {this.state.links.searchCount} search results.</p>
      </div>
    )
  }
}
