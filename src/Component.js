import React from "react";

export default function Component(props) {

    //const answerRender = props.questions.map(option => {
    //             return <button>{props.questions[option].answers.value}</button>
        
    //         })

           // console.table(props.questions)
           // console.table(props.questions[0].answers)

    //const answerRender = props.questions.map(question => {
    //    console.log(question.answers)
    //})

    //const answerRender = props.answers.map(answerObj => {
    //    answerObj.map(answer => {
    //        console.log(answer)
     //   })
    //})

    return(
        <>
            <h3>{props.question}</h3>
            <div className="answer-container">
                <button>{props.answers[0][props.questionNum].value}</button>
                <button>{props.answers[1][props.questionNum].value}</button>
                <button>{props.answers[2][props.questionNum].value}</button>
                <button>{props.answers[3][props.questionNum].value}</button>
            </div>
        </>
        
    )
}