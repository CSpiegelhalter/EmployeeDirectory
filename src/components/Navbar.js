import React, { Component } from 'react';
import Header from "./header"

export default class Navbar extends Component {
    render() {
        return (
            <div className="col-md-12" style={{backgroundColor: "blue", height: 250 + "px"}}>
                <Header />
            </div>
        )
    }
}