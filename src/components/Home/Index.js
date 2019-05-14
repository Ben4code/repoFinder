import React, { Component } from 'react';
import Search from './Search';
import Users from './Users';
import Pagination from './Pagination';
import axios from 'axios'

export default class Home extends Component {
    state = {
        searchTerm: '',
        per_page: 12,
        users: '',
        links: {
            first: '',
            last: '',
            next: '',
            prev: ''
        }
    }

    fetchUsers = (search) => {
        this.setState({ searchTerm: search });
        const searchUrl  = `https://api.github.com/search/users?q=${search}&page=1&per_page=${this.state.per_page}`;        
        axios.get(searchUrl)
            .then(response => {
                console.log(response);
                this.setState({ users: response.data.items });
            })
            .catch(err => {
                console.log(err);
            })            
    }

    render() {
        return (
            <section>
                <Search getSearch={this.fetchUsers} />
                <Users users={this.state.users} />
                <Pagination links={this.state.links} />
            </section>
        )
    }
}
