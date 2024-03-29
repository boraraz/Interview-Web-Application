import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table'
import { Button, Container } from 'react-bootstrap';
import { updateQuestions } from '../store/QuestionReducer.js'

const Store = (props) => {
    const { quest } = props
    const [question, setAnswer] = useState([])
    var { questions } = useSelector((state) => state.question)
    const [emptyArray] = useState([])
    useEffect(() => {
        setAnswer(quest);
    }, [quest]);
    const dispatch = useDispatch()
    const deleteQuestion = (qname) => {
        const newQuestions = questions.filter(x => x.name !== qname.name)
        dispatch(updateQuestions(newQuestions))
    }
    return (
        <Container fluid>
            <Table className="mt-3" style={{tableLayout: "auto"}}>
                    <tr>
                        <th style={{width: "10%"}}>Subject</th>
                        <th style={{width: "80%"}}>Question</th>
                        <th style={{width: "10%"}}>       </th>
                    </tr>
                    {questions.map((x) => (
                        <tr>
                            <td>{x.type}</td>
                            <td>{x.name}</td>
                            <td><Button onClick={() => deleteQuestion(x)} className="btn btn-primary">Delete</Button></td>
                        </tr>
                    ))}
            </Table>
        </Container>
    )
}

export default Store;