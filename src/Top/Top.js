import logo from "../assets/images/logo.png"
import "./style.css";

function Top(){
    return <div className="top">
        <img src={logo} alt="" className="logo" />
        <h2 className="title">ZapRecall</h2>
    </div>
}

export default Top;