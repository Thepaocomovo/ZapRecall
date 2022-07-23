import yep from "../assets/images/yep.png"
import nope from "../assets/images/nope.png"
import ahn from "../assets/images/ahn.png"

function Icons({done, setPass}){
    
    return done.map(color=>{
        if(color === "green"){
            return <img src={yep} alt=""/>
        } else if(color === "yellow"){
            return <img src={ahn} alt=""/>
        } else if(color === "red"){
            setPass(false)
            return <img src={nope} alt=""/>
        }
        return ""
    })
   
}

export default Icons;