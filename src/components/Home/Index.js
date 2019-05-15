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
        links: '',
        searchReceived: false
    }

    fetchUsers = (search) => {
        this.setState({ searchTerm: search, searchReceived: true });
        const searchUrl = `https://api.github.com/search/users?q=${search}&page=9&per_page=${this.state.per_page}`;
        axios.get(searchUrl)
            .then(response => {

                //Fetch search results
                this.setState({ users: response.data.items });

                //Fetch pagination urls
                const linkArray = response.headers.link.split(',');
                let links = [];
                linkArray.forEach((link, i) => {
                    const charLength = link.split(';')[1].trim().replace("rel=", "").length - 2;
                    links.push({
                        url: link.split(';')[0].replace("<", "").replace(">", "").trim(),
                        text: link.split(';')[1].trim().replace("rel=", "").substr(1, charLength)
                    })
                })

                //Format Links
                let newLinks = [];
                links.map(link => {
                    if (link.text === 'first') {
                        let first = { state: true, text: link.text, url: link.url }
                        newLinks.push({ first });
                    }
                    if (link.text === 'prev') {
                        let prev = { state: true, text: link.text, url: link.url }
                        newLinks.push({ prev });
                    }
                    if (link.text === 'next') {
                        let next = { state: true, text: link.text, url: link.url }
                        newLinks.push({ next });
                    }
                    if (link.text === 'last') {
                        let last = { state: true, text: link.text, url: link.url }
                        newLinks.push({ last });
                    }
                    return newLinks;
                })

                //Format Links
                let allLink = {};
                newLinks.map((link) => {
                    if (link.prev) {
                        allLink.prevLink = link.prev.url
                    }
                    if (link.next) {
                        allLink.nextLink = link.next.url
                    }
                    if (link.first) {
                        allLink.firstLink = link.first.url
                    }
                    if (link.last) {
                        allLink.lastLink = link.last.url
                    }
                    return allLink
                })
                //Fetch page counts
                const searchCount = response.data.total_count;
                let currentPage = parseInt(searchUrl.split('&')[1].replace("page=", ""));
                const prevPage = parseInt(searchUrl.split('&')[1].replace("page=", "")) - 1;
                const nextPage = parseInt(searchUrl.split('&')[1].replace("page=", "")) + 1;
                
                //Add page counts to allLink
                allLink.currentPage = currentPage; 
                allLink.searchCount = searchCount;
                allLink.prevPage = prevPage;
                allLink.nextPage = nextPage;
                this.setState({ links: allLink});
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return (
            <section>
                <Search getSearch={this.fetchUsers} />
                {this.state.searchReceived && <Users users={this.state.users} />}
                {this.state.searchReceived && <Pagination links={this.state.links} />}
            </section>
        )
    }
}
