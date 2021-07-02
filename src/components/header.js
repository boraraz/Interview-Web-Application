import React from 'react'
import { Dropdown, Button, Container, Nav, Navbar } from 'react-bootstrap';
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
        <Container fluid className="p-0 sticky">
            <div className="d-flex flex-nowrap headerLayout justify-content-between bg-primary">
                <img src="/assets/bites-logo.png" alt="Bites Logo" height="35px"/>
                <div className="center-div">
                    <Button className="mobile btnStyle" onClick={() => showAnswers()}>Show Answers</Button>
                    <Button className="mobile btnStyle" onClick={() => page()}>Question Entry</Button>
                    <Button className="mobile btnStyle" onClick={() => refresh()}>Questions</Button>
                    <Dropdown className="desktop bodyLayout">
                        <Dropdown.Toggle className="btnStyle" id="dropdown">Menu</Dropdown.Toggle>
                        <Dropdown.Menu >
                            <Dropdown.Item onClick={() => refresh()}>Questions</Dropdown.Item>
                            <Dropdown.Item onClick={() => page()}>Question Entry</Dropdown.Item>
                            <Dropdown.Item onClick={() => showAnswers()}>Show Answer</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <Navbar className="desktop justify-content-center" bg="primary" variant="dark" expanded="true">
                <Nav>
                    <Nav.Link className="navbar-element" onClick={() => selectSubject("FrontEnd")}>Frontend</Nav.Link>
                    <Nav.Link className="navbar-element" onClick={() => selectSubject("BackEnd")}>Backend</Nav.Link>
                    <Nav.Link className="navbar-element" onClick={() => selectSubject("DevOps")}>Devops</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );
}

export default Header;