import yep from "../assets/images/yep.png"
import nope from "../assets/images/nope.png"
import ahn from "../assets/images/ahn.png"

function Icons({ done, setPass }) {

    return done.map((color, index) => {
        if (color === "green") {
            return <img src={yep} alt="" key={index} />
        } else if (color === "yellow") {
            return <img src={ahn} alt="" key={index} />
        } else if (color === "red") {
            setPass(false)
            return <img src={nope} alt="" key={index} />
        }
        return ""
    })

}

export default Icons;