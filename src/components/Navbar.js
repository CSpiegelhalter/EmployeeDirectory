import React from 'react';


function Navbar(props) {
    return (
        <div>
            <input
                value={props.filteredUsers}
                onChange={props.handleSearchChange}
                type="text"
                placeholder="Search employees"
            />
        </div>
    )
}

export default Navbar;