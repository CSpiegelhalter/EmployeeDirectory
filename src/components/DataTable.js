import React from 'react';
import DataBody from './DataBody';

function DataTable({ headings, users, handleSort }) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col-md-2"
                                    style={{ width }}
                                    key={name}
                                    onClick={() => {
                                        handleSort(name.toLowerCase())
                                    }}
                                >
                                    { name}
                                </th>
                            )
                        })}
                    </tr>
                </thead>

                <DataBody users={users} />

            </table>
        </div>
    )
}

export default DataTable;