import vector from "../assets/images/Vector.png";
import arrow from "../assets/images/arrow.png";
import ahn from "../assets/images/ahn.png"
import nope from "../assets/images/nope.png"
import yep from "../assets/images/yep.png"




import "./style.css";

import React from "react";

function Question({ number, open, setOpen, Text, Answer }) {
    const [mode, setMode] = React.useState(true)
    const [rotate, setRotate] = React.useState("theFlyer")
    const [color, setColor] = React.useState("")
    const [signal, setSignal] = React.useState(vector)

    function Clicou() {
        if (signal === vector) {
            if (open) {
                setMode(!mode);
                setOpen(!open);
            }
        }

    }

    function Choice({ ink, simbol }) {
        setSignal(simbol)
        setColor(ink)
        setMode(!mode)
        setOpen(!open)
    }

    if (mode) {
        return <div className="question">
            <h3 className={color}>Pergunta {number} </h3>
            <img src={signal} alt="" onClick={() => Clicou()} />
        </div>
    }
    return <div className="mainContainer ">
        <div className={rotate}>
            <div className={"theFront flyer"}>
                <div className="QuestionText">
                    <h3>{Text} </h3>
                </div>
                <div className="arrow">
                    <img src={arrow} alt="" onClick={() => setRotate("theFlyer rotate")} />
                </div>
            </div>
            <div className="theBack flyer">
                <h3 className="QuestionText">{Answer}</h3>
                <div className="buttons">
                    <div className="button not" onClick={() => Choice({ ink: "red", simbol: nope })}>Não lembrei</div>
                    <div className="button almost" onClick={() => Choice({ ink: "yellow", simbol: ahn })}>Quase não lembrei</div>
                    <div className="button zap" onClick={() => Choice({ ink: "green", simbol: yep })}>Zap</div>
                </div>
            </div>
        </div>

    </div>
}

export default Question;