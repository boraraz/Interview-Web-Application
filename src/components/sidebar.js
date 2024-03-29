import React from 'react'
import { ListGroup, Button } from 'react-bootstrap'
import { setSubject } from '../store/QuestionReducer'
import { useDispatch } from "react-redux"

const Sidebar = () => {
    const dispatch = useDispatch()
    const selectSubject = (parameter) => {
        dispatch(setSubject(parameter));
    }
    return (
        <div>
            <nav className="mobile">
                <ListGroup className="listGroup mt-2">
                    <Button className="bg-secondary btn-secondary" onClick={() => selectSubject("FrontEnd")}>
                        <h3 className="listItem">FrontEnd</h3>
                    </Button>
                    <Button className="bg-secondary btn-secondary" onClick={() => selectSubject("BackEnd")}>
                        <h3 className="listItem">BackEnd</h3>
                    </Button>
                    <Button className="bg-secondary btn-secondary" onClick={() => selectSubject("DevOps")}>
                        <h3 className="listItem">DevOps</h3>
                    </Button>
                </ListGroup>
            </nav>
        </div>
    );

}

export default Sidebar;