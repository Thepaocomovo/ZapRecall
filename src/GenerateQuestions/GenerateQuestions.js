import Question from "../Question/Question";

import React from "react";

function GenerateQuestions({ deck, done, setDone}) {
    const [open, setOpen] = React.useState(true)
    console.log(deck)
    
    let num = 0
    

    let shuffledDeck = deck
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        console.log(shuffledDeck )
        shuffledDeck = shuffledDeck.slice(4);
        console.log(shuffledDeck )
    return shuffledDeck.map((flyer, index) => {
        num++;
        return <Question number={num} open={open} setOpen={setOpen} Text={flyer.Text} Answer={flyer.Answer} done={done} setDone={setDone} key={index} />
    })
}

export default GenerateQuestions