import vector from "../assets/images/Vector.png";
import arrow from "../assets/images/arrow.png";

import "./style.css";

import React from "react";

function Question({ number, open, setOpen, Text, Answer  }) {
    const [mode, setMode] = React.useState(true)
    const [rotate, setRotate] = React.useState("theFlyer")
 
    function Clicou(){
        if (open) {
            setMode(!mode);
            setOpen(!open);
        } 
    }

    if (mode) {
        return <div className="question">
            <h3>Pergunta {number} </h3>
            <img src={vector} alt="" onClick={() => Clicou()} />
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
                    <div className="button not">Não lembrei</div>
                    <div className="button almost">Quase não lembrei</div>
                    <div className="button zap">Zap</div>
                </div>
            </div>
        </div>

    </div>
}

export default Question;