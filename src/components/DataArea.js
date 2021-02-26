import React, { Component } from 'react';
import DataTable from './DataTable';
import API from '../util/API';
import Navbar from './Navbar';

export default class DataArea extends Component {

    state = {
        users: [{}],
        order: "decend",
        filteredUsers: [{}]
    }

    headings = [
        {name: "Image", width: "15%"},
        {name: "Name", width: "15%"},
        {name: "Phone", width: "15%"},
        {name: "Email", width: "15%"},
        {name: "DOB", width: "15%"}
    ]

    handleSearchChange = e => {
        const search = e.target.value
        const searchList = this.state.users.filter(each => {
            let userInfo = Object.values(each)
                .join("")
                .toLowerCase()
            return userInfo.indexOf(search.toLowerCase()) !== -1
        })
        this.setState({ filteredUsers: searchList })
    }

    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            })
        })
    }

    render() {
        return(
            <div>
                <Navbar handleSearchChange={this.handleSearchChange} />
                <DataTable
                    headings={this.headings}
                    users={this.state.filteredUsers}
                    handleSort={this.handleSort}
                />
            </div>
        )
    }
}