import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
const Store = (props) => {
    const { quest } = props
    const [question, setAnswer] = useState([])
    const { questions } = useSelector((state) => state.question)

    useEffect(() => {
        setAnswer(quest);
    }, [quest]);

    return (
        <div>
            {questions.map((x) => (
                <div>
                    {x.type} : {x.name}
                </div>
            ))}
        </div>
    )

}
export default Store;