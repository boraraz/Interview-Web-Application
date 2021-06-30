import React from 'react'
import Table from 'react-bootstrap/Table'

const Answers = () =>{
    
    return(
        <div className="container fluid">
            <Table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Quesiton</th>
                        <th>Answer</th>
                    </tr>
                </thead>
            </Table>
        </div>
    )
}

export default Answers;