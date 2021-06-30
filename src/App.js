import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar';
import Main from './components/main';
import QuestionEntry from './components/questionEntry';
import Answers from './components/answers';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Switch,
  Route,
  //Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';

const App = () => {
<<<<<<< HEAD
  
    return (
      <Container fluid>
      <Router>
      <div>
        <Row>
          <Header />
        </Row>
        <Row className="bodyLayout">
          <Col sm={3} className="sidenav mobil">
            <Sidebar />
          </Col>
          <Col className="mainLayout">
           
              <Switch>
                <Route exact path="/Main"> 
                  <Main />
                </Route>
                <Route path="/questionEntry" component={QuestionEntry} />
                <Route path="/answers" component={Answers} />
              </Switch>
            
          </Col>
        </Row>
      </div>
      </Router>
      </Container>
=======

  return (
      <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row className="bodyLayout">
        <Col sm={3} className="sidenav mobil">
          <Sidebar />
        </Col>
        <Col className="mainLayout">

          <Switch>
            <Route exact path="/Main">
              <Main />
            </Route>
            <Route path="/questionEntry" component={QuestionEntry} />
            <Route path="/answers" component={Answers} />
          </Switch>

        </Col>
      </Row>
    </Container>
>>>>>>> a98f950792d87ad1bc6208d34432fbdedcf69142
    );
  
}

export default App;
