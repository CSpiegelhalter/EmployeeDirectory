import React, { Component } from 'react';
import DataTable from './DataTable';
import Nav from './Navbar';
import API from '../util/API';

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
}