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
    const [FrontCount, setFCount] = useState(0)
    const [BackCount, setBCount] = useState(0)
    const [DevCount, setDCount] = useState(0)
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
        if (selected.length !== 0 && selected[FrontCount].name !== undefined) {
            if (subject === "FrontEnd") {
                const qname = selected[FrontCount].name
                setName(qname)
            }
        }
        if (selected.length !== 0 && selected[BackCount].name !== undefined) {
            if (subject === "BackEnd") {
                const qname = selected[BackCount].name
                setName(qname)
            }
        }
        if (selected.length !== 0 && selected[DevCount].name !== undefined) {
            if (subject === "DevOps") {
                const qname = selected[DevCount].name
                setName(qname)
            }
        }
    }, [FrontCount, BackCount, DevCount, subject]);
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
        if(selectedQuestion.length === FrontCount + 1 && subject === "FrontEnd"){
            alert.show('There is no more questions left in this subject!')
        }
        else if(selectedQuestion.length === BackCount + 1 && subject === "BackEnd"){
            alert.show('There is no more questions left in this subject!')
        }
        else if(selectedQuestion.length === DevCount + 1 && subject === "DevOps"){
            alert.show('There is no more questions left in this subject!')
        }
        else {
            if (subject === "FrontEnd") {
                const a = FrontCount + 1
                setFCount(a)
            }
            else if (subject === "BackEnd") {
                const a = BackCount + 1
                setBCount(a)
            }
            else if (subject === "DevOps") {
                const a = DevCount + 1
                setDCount(a)
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
                    <textarea name="Answer" style={{ width: '95%', height: '150px' }} className="container-fluid " placeholder="Your answer here... (Press Save All button after completing the interview)" onChange={(e) => changeAnswer(e.target.value)} value={answer}></textarea>
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