import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        searchTerm : '',
        error: false
    }

    getTerm = (e) =>{
        this.setState({searchTerm: e.target.value})
    }

    searchSubmit = (e) =>{
        e.preventDefault();
        if(this.state.searchTerm === ''){
            this.setState({error: true});
            setTimeout(()=>{
                this.setState({error: false});
            }, 3000)
            return;
        }
        this.props.getSearch(this.state.searchTerm);    
    }
    render() {
        return (
            <div className="search">
                <h1 className="search__title">Search Git User</h1>
                <div className="search__form">
                    <form onSubmit={(e)=> this.searchSubmit(e)}>
                        <input type="text" value={this.state.searchTerm} onChange={(e)=> this.getTerm(e)}  placeholder="Enter user name."/>
                        { this.state.error ? <p className="error">Search field cannot be left empty.</p> : null}

                        <button className="btn btn-search">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}
