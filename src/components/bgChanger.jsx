import React ,{useState} from "react";
import '../css/bgChanger.css';

function BgChanger() {

    const [color, setColor] = useState('black');

    return (
        <div className="outer-div" style={{backgroundColor: color}}>
            <div  >
                <button onClick={()=>setColor('red')} >red</button>
                <button onClick={()=>setColor('yellow')} >yellow</button>
                <button onClick={()=>setColor('blue')} >blue</button>
                <button onClick={()=>setColor('green')} >green</button>
            </div>
        </div>
    )
}

export default BgChanger;