import React, { Component } from 'react';
import "../styles/header.css"

export default class Header extends Component {
    render() {
        return (
            <div style={{backgroundColor: "blue"}}>
                <h1>Employee Directory</h1>
                <p>Click on carrots to filter by heading or use the search box to narrow your results</p>
            </div>
        )
    }
}