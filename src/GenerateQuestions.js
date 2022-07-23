import Question from "./Question/Question";

import React from "react";

function GenerateQuestions({ deck }) {
    const [open, setOpen] = React.useState(true)
    let num = 0

    let shuffledDeck = deck
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

    return shuffledDeck.map((flyer, index) => {
        num++;
        return <Question number={num} open={open} setOpen={setOpen} Text={flyer.Text} Answer={flyer.Answer} key={index} />
    })
}

export default GenerateQuestions