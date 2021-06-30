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
        <Container fluid className="p-0">
            <div className="d-flex flex-nowrap headerLayout justify-content-between bg-primary">
                <img src="/assets/bites-logo.png" height="35px"/>
                <div className="center-div">
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
            <Navbar className="desktop justify-content-center" bg="primary" variant="dark" expanded="true">
                <Nav>
                    <Nav.Link className="navbar-element" href="#frontend">Frontend</Nav.Link>
                    <Nav.Link className="navbar-element" href="#backend">Backend</Nav.Link>
                    <Nav.Link className="navbar-element" href="#devops">Devops</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    );

}

export default Header;