import Top from "../Top/Top";
import GenerateQuestions from "../GenerateQuestions";
import DoneBar from "../DoneBar/DoneBar";

import "./style.css"

const deck = [
    {Text: "O que é JSX?", Answer:"Uma extensão de linguagem do JavaScript" }, 
    {Text: "Podemos colocar ___ dentro do JSX", Answer:"expressões" }, 
    {Text: "A primeira letra de um componente deve ser...", Answer:"letra maiúscula" }, 
    {Text: "O que o React é?", Answer:"uma biblioteca JavaScript para construção de interfaces" }
]



function Page02() {
    
    return <div className="page page02">
        <Top />
        <GenerateQuestions deck={deck}/>
        <DoneBar />
    </div>
}

export default Page02;
