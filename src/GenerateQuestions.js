import Question from "./Question/Question";

import React from "react";

function GenerateQuestions({deck}){
    const [open, setOpen] = React.useState(true)
    let num = 0
    return deck.map((flyer, index) => {
        num ++;
        return <Question number={num} open= {open} setOpen= {setOpen} Text={flyer.Text} Answer={flyer.Answer} key={index}/>
    })
}

export default GenerateQuestions