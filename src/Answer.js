import React from "react";

export default function Answer (props) {

    const styles = {
        backgroundColor: props.isHeld ? "#D6DBF5": "white"
    }

    return(
        <button correct={props.correct} onClick={props.clickHandle} style={styles}>{props.value}</button>
    )
}