import React from 'react'
import { Dropdown, Button, } from 'react-bootstrap';
import { setSubject } from '../store/QuestionReducer'
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";

const Header = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const selectSubject = (parameter) => {
        dispatch(setSubject(parameter));
    }
    const page = () => {
        history.push("/questionEntry");
    }
    const refresh = () => {
        history.push("/Main");
    }
    const showAnswers = () => {
        history.push("/answers");
    }
    return (
        <div className="container fluid flex-nowrap p-0">
            <div className="d-flex flex-nowrap headerLayout justify-content-between">
                <h1 className="headerStyle">BİTES Interview</h1>
                <div></div>
                <div className="align">
                    <Button className="mobile btnStyle" onClick={() => showAnswers()}>Show Answers</Button>
                    <Button className="mobile btnStyle" onClick={() => page()}>Question Entry</Button>
                    <Button className="mobile btnStyle" onClick={() => refresh()}>Question</Button>

                    <Dropdown className="desktop bodyLayout">
                        <Dropdown.Toggle className="btnStyle" id="dropdown">Menu</Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item onClick={() => refresh()}>Question</Dropdown.Item>
                            <Dropdown.Item onClick={() => page()}>Question Entry</Dropdown.Item>
                            <Dropdown.Item onClick={() => showAnswers()}>Show Answer</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={() => selectSubject("FrontEnd")}>Frontend</Dropdown.Item>
                            <Dropdown.Item onClick={() => selectSubject("BackEnd")}>Backend</Dropdown.Item>
                            <Dropdown.Item onClick={() => selectSubject("DevOps")}>DevOps</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <hr className="hrmp" />
            <div><p className="desktop title">Frontend</p></div>
        </div>
    );

}

export default Header;