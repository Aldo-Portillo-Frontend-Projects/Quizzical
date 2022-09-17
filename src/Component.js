import React from "react";

export default function Component(props) {
    return(
        <>
            <h3>{props.question}</h3>
            <div className="answer-container">
                <button>{props.answers[0].value}</button>
                <button>{props.answers[1].value}</button>
                <button>{props.answers[2].value}</button>
                <button>{props.answers[3].value}</button>
            </div>
        </>
        
    )
}