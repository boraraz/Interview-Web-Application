import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table'
import { Button, Container } from 'react-bootstrap';
import { useAlert } from 'react-alert';
import { addQuestion } from '../store/QuestionReducer.js'

const Store = (props) => {
    const { quest } = props
    const [question, setAnswer] = useState([])
    var { questions } = useSelector((state) => state.question)
    { const qname = questions.name }
    useEffect(() => {
        setAnswer(quest);
    }, [quest]);

    const alert = useAlert();
    const dispatch = useDispatch()
    const deleteQuestion = (qname) => {
        debugger
        alert.show('Deleted');
        const element = questions.find((x) => x.name === qname)
        const index = questions.indexOf(element)
        const updatedQuestion = questions.splice(index, 1)
        dispatch(addQuestion(updatedQuestion))
    }

    return (
        <Container fluid>
            <Table className="mt-3">
                <tbody>
                    <tr>
                        <th>Subject</th>
                        <th>Question</th>
                        <th>Delete</th>
                    </tr>


                    {questions.map((x) => (

                        <tr >
                            <td>{x.type}</td>
                            <td>{x.name}</td>
                            <td><Button onClick={() => deleteQuestion()} className="btn btn-primary">Delete</Button></td>
                        </tr>


                    ))}
                </tbody>
            </Table>
        </Container>
    )

}
export default Store;