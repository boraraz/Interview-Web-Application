
import Table from 'react-bootstrap/Table'
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

const Answers = () => {
    // const { ans } = props
    // const [answers, setAnswer] = useState([])
    // var { answer } = useSelector((state) => state.answers)

    // useEffect(() => {
    //     setAnswer(ans);
    // }, [ans]);
    return (
        <div className="container fluid">
            <Table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Quesiton</th>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {answers.map((x) => (
                        <tr>
                            <th>{x.type}</th>
                            <th>{x.questName}</th>
                            <th>{x.aName}</th>
                        </tr>
                    ))
                    } */}
                </tbody>
            </Table>
        </div>
    )
}

export default Answers;