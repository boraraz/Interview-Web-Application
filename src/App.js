import React from 'react'
import Header from './components/header'
import Sidebar from './components/sidebar';
import Main from './components/main';
import QuestionEntry from './components/questionEntry'
//import './App.css';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

const App = () => {
  
    return (
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
              </Switch>
            
          </Col>
        </Row>
      </div>
      </Router>
    );
  
}

export default App;
