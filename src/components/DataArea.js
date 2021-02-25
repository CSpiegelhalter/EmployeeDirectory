import React, { Component } from 'react';
import DataTable from './DataTable';
import Nav from './Navbar';
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
                
            </div>
        )
    }
}