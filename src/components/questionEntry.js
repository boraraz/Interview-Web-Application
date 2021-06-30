import React, { useState } from 'react'
import Store from './Store.js'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addQuestion } from '../store/QuestionReducer.js'

const QuestionEntry = () => {


    const [question, setQuestion] = useState("")
    const [questions, setQuestions] = useState([])
    const [storeVisible, setStoreVisible] = useState(true)
    const { subject } = useSelector((state) => state.question)
    const changeQuestion = (value) => {
        setQuestion(value)
    }
    const dispatch = useDispatch() 

    const saveQuestion = (question) => {

        const obj = { type: subject, name: question }
        questions.push(obj)
        setQuestions(questions)
        dispatch(addQuestion(obj))
        setQuestion("")
        setStoreVisible(true)
    }
    return (
        <div className="sec">
            <div className="question">
                <p>Entered question will be appeared in here!</p>
            </div>
            <div>
                <form className="pt-2">
                    <textarea name="NewQuestion" style={{ width: '95%', height: '150px' }} className="container-fluid " placeholder="Enter a question here..." onChange={(e) => changeQuestion(e.target.value)} value={question}></textarea>
                    <br /><br />
                    <Button className="btnStyle bg-primary" value="Save Question" onClick={() => saveQuestion(question)}>Save Question</Button>
                </form>
            </div>
            {storeVisible &&
                <Store quest={questions} />
            }
        </div>
    );

}
export default QuestionEntry