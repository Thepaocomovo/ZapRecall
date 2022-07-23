import Page02 from "../Page02/Page02";

import logo from "../assets/images/logo.png"
import "./style.css"

import React from "react";

function Page01() {
    const [start, setStart] = React.useState(false);

    function Click() {
        setStart(!start)
    }
    if (start) {
        return <Page02 />
    }
    return <div className="page page01">
        <img src={logo} alt="" className="logo" />
        <h1>ZapRecall</h1>
        <div className="start" onClick={() => Click()}>
            <p>Iniciar Recall</p>
        </div>
    </div>
}

export default Page01;
