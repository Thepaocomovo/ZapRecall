import Top from "../Top/Top";
import GenerateQuestions from "../GenerateQuestions/GenerateQuestions";
import DoneBar from "../DoneBar/DoneBar";

import "./style.css"

import React from "react"

const deck = [
    {Text: "O que é JSX?", Answer:"Uma extensão de linguagem do JavaScript" }, 
    {Text: "Podemos colocar ___ dentro do JSX", Answer:"expressões" }, 
    {Text: "A primeira letra de um componente deve ser...", Answer:"letra maiúscula" }, 
    {Text: "O que o React é?", Answer:"uma biblioteca JavaScript para construção de interfaces" },
    {Text: "O ReactDOM nos ajuda __", Answer:"interagindo com a DOM para colocar componentes React na mesma" },
    {Text: "Usamos o npm para __", Answer:"gerenciar os pacotes necessários e suas dependências" },
    {Text: "Usamos props para __", Answer:"passar diferentes informações para componentes" },
    {Text: "Usamos estado (state) para __", Answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]

function Page02() {
    const [done, setDone] = React.useState([])

    return <div className="page page02">
        <Top />
        <GenerateQuestions deck={deck} done={done} setDone={setDone}/>
        <DoneBar done={done}/>
    </div>
}

export default Page02;
