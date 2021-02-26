import React from 'react';

function  DataBody({ users }) {

    function formatDate(date) {
        
    }
    return(
        <tbody>
            {users.map(({ login, name, picture, phone, email, dob }) => {
                return(
                <tr  key={login.uuid}>
                    <td>
                        <img
                        src={picture.medium}
                        alt={name.first + " " + name.last + "'s profile picture"}
                        />
                    </td>
                    <td>
                        {name.fisrt} {name.last}
                    </td>
                    <td>
                        {phone}
                    </td>
                    <td>
                        <a href={"send email to: " + email} target="__blank">
                            {email}
                        </a>
                    </td>
                    <td>
                        {formatDate(dob.date)}
                    </td>
                </tr>
                )
            })
            }
        </tbody>
    )
}

export default DataBody;