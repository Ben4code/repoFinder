import React, { Component } from 'react'
import Search from './Search';
import Users from './Users';
import Pagination from './Pagination';
import axios from 'axios'

export default class Home extends Component {
    state = {
        searchTerm: '',
        per_page: 10,
        users: '',
        links: {
            first: '',
            last: '',
            next: '',
            prev: ''
        },
        errors: ''
    }

    fetchUsers = (search) => {
        this.setState({ searchTerm: search });
        axios.get(`https://api.github.com/search/users?q=${this.state.searchTerm}&page=1&per_page=${this.state.per_page}`)
            .then(response => {
                console.log(response);
                this.setState({ users: response.items });
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <div>
                <Search getSearch={this.fetchUsers} />
                <Users users={this.state.users} />
                <Pagination links={this.state.links} />
            </div>
        )
    }
}
