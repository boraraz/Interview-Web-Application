import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap';
import { useAlert } from 'react-alert';

const Store = (props) => {
    const { quest } = props
    const [question, setAnswer] = useState([])
    const { questions } = useSelector((state) => state.question)

    useEffect(() => {
        setAnswer(quest);
    }, [quest]);

    const alert = useAlert();
    const deleteQuestion = () => {
        alert.show('Deleted')
    }

    return (
        <div className="container fluid">
            <Table className="mt-3">
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Question</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((x) => (

                        <tr >
                            <td>{x.type}</td>
                            <td>{x.name}</td>
                            <td><Button onClick={() => deleteQuestion()} className="btn btn-primary">Delete</Button></td>
                            <td />
                        </tr>


                    ))}
                </tbody>
            </Table>
        </div>
    )

}
export default Store;