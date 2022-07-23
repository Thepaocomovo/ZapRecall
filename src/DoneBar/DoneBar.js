import Icons from "../Icons/Icons.js"

import "./style.css";
import party from "../assets/images/party.png"
import sad from "../assets/images/sad.png"

import React from "react"

function DoneBar({ done }) {
    const [pass, setPass] = React.useState("")
    if (pass === "" && done.length === 4) {
        return <div className="doneBar expand">
            <div className="title">
                <img src={party} alt="" />
                <p><strong>Parabens</strong></p>
            </div>
            <p>Você não esqueceu de nenhum flashcard!</p>
            <div className="data">
                <p>{done.length}/4 concluídos</p>
                <div className="icons">
                    <Icons done={done} setPass={setPass} />
                </div>
            </div>
        </div>
    } else if (pass === false && done.length === 4) {
        return <div className="doneBar expand">
            <div className="title">
                <img src={sad} alt="" />
                <p><strong>Putz...</strong></p>
            </div>
            <p>Ainda faltam alguns...</p>
            <p>Mas não desanime!</p>
            <div className="data">
                <p>{done.length}/4 concluídos</p>
                <div className="icons">
                    <Icons done={done} setPass={setPass} />
                </div>
            </div>
        </div>
    }
    return <div className="doneBar">
        <p className="text">{done.length}/4 concluídos</p>
        <div className="icons">
            <Icons done={done} setPass={setPass} />
        </div>
    </div>
}

export default DoneBar;