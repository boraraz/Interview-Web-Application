
import Table from 'react-bootstrap/Table'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';
import { deletedQuestions } from '../store/QuestionReducer.js'

const Answers = (props) => {
    const { ans } = props
    const [answer, setAnswer] = useState([])
    var questionState = useSelector((state) => state.question)
    const [emptyArray] = useState([])
    

    useEffect(() => {
        setAnswer(ans);
    }, [ans]);
    const dispatch = useDispatch()
    const deleteAnswers = () => {
        dispatch(deletedQuestions(emptyArray))
    }
    return (
        <div className="container fluid">
            <h1 style={{color: "#007bff"}}>ANSWERS</h1>
            <Table>
                <tbody>
                    <tr>
                        <th>Subject</th>
                        <th>Quesiton</th>
                        <th>Answer</th>
                        <th style={{ width: "20%" }}><Button onClick={() => deleteAnswers()} className="btn btn-primary">Delete All</Button></th>
                    </tr>
                    {questionState.answers.map((x) => (
                        <tr>
                            <th>{x.type}</th>
                            <th>{x.questName}</th>
                            <th>{x.aName}</th>
                            <th> </th>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Answers;