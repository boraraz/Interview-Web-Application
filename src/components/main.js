import React, { useState, useEffect } from 'react'
import Answers from './answers'
import { Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'
import { addAnswer } from '../store/QuestionReducer.js'

const Main = () => {
    const { subject, questions } = useSelector((state) => state.question)
    const [answer, setAnswer] = useState("")
    const [name, setName] = useState("")
    const [count, setCount] = useState(0)
    const [storeVisible, setStoreVisible] = useState(false)
    const [selectedQuestion, setSelectedQuestion] = useState([])
    const alert = useAlert()
    var [savedAnswers, setSavedAnswers] = useState([])
    const changeAnswer = (value) => {
        setAnswer(value)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        const selected = questions.filter((x) => x.type === subject)
        setSelectedQuestion(selected)
        if (selected.length !== 0 && selected[count].name !== undefined) {
            const qname = selected[count].name
            setName(qname)
        }
    }, [count, subject]);
    useEffect(() => {
            setCount(0)
    }, [subject])
    const saveAnswer = (param) => {
        setStoreVisible(storeVisible)
        setAnswer(param)
        const answerObject = {
            type: subject,
            aName: answer,
            questName: name,
        }
        setSavedAnswers([...savedAnswers, answerObject])
        setAnswer("")
        if (selectedQuestion.length === count + 1) {
            alert.show('There is no more questions left!')
        } else {
            if(subject === "FrontEnd"){
            const FrontCount = count + 1
            setCount(FrontCount)
            }
            else if(subject === "BackEnd"){
                const BackCount = count + 1
                setCount(BackCount)
            }
            else if(subject === "DevOps"){
                const DevCount = count + 1
                setCount(DevCount)
            }
        }
    }
    const sendToStore = () => {
        dispatch(addAnswer(savedAnswers))
    }
    return (
        <div className="sec">
            <div className="question">
                <p>Question: {name}</p>
            </div>
            <div>
                <form className="pt-2">
                    <textarea name="Answer" style={{ width: '95%', height: '150px' }} className="container-fluid " placeholder="Your answer here... (Press Save All button after completing each section)" onChange={(e) => changeAnswer(e.target.value)} value={answer}></textarea>
                    <br /><br />
                    <Button className="btnStyle bg-primary" value="Next Question" title="Saves the answer and shows the new question" onClick={() => saveAnswer(answer)}>Next Question</Button>
                    <Button className="btnStyle bg-primary" value="Save All" onClick={() => sendToStore()}>Save All</Button>
                </form>
            </div>
            {storeVisible &&
                <Answers ans={answer} />
            }
        </div>
    );
}

export default Main;