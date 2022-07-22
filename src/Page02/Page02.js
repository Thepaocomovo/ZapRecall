import Top from "../Top/Top";
import Question from "../Question/Question";
import DoneBar from "../DoneBar/DoneBar";

function Page02() {
    return <div className="page page02">
        <Top />
        <Question number="1" />
        <Question number="2" />
        <Question number="3" />
        <Question number="4" />

        <DoneBar/>
    </div>
}

export default Page02;
