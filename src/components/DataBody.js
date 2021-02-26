import React from 'react';

function  DataBody({ users }) {

    function formatDate(date) {
        const dateArray = date.split("-")
        const year = dateArray[0]
        const month = dateArray[1]
        const dayArray = dateArray[2].split("T")
        const day = dayArray[0]
        const newDate = [month, day, year].join("-")
        return newDate;
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