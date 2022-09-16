import React from 'react';

export default function Answer (props) {
    function clickHandle (){
        console.log(props.correct)
        //props.held ? props.held = false : props.held = true;
        console.log(props.held)
    }
    return (
        <button correct={props.correct} onClick={clickHandle} held={props.held}>{props.value}</button>
    )
}