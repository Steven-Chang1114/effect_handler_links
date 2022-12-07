import './RacingLine.css';
import { useDeferredValue, useTransition, useState, useRef, useEffect, startTransition } from 'react';
import { useFrame } from "@react-three/fiber";
import Line from './Line.js';

function Hook() {

    let [prio, setPrio] = useState("Low");
    let [color, setColor] = useState("red");
    let [lines, setLines] = useState([]);

    const containerRef = useRef(null);

    let addLine = (prio, color) => {
        const ref = containerRef.current

        setLines((prevState) => ([
            ...prevState,
            {
                prio,
                component: <Line color={color}/>
            }
        ]))
    }

    let buttonPressed = () => {
        switch(prio) {
            case "High":
                addLine("High", color)
                break;
            case "Low":
                addLine("Low", color)
                break;
            default:
                console.log("error") 
        }
    }

    return (
      <div>
        <div className='container' ref={containerRef}>
            {lines.map(el => {
                if (el.prio === "Low") {
                    console.log("enqueue low"); 
                    return startTransition(() => {
                        return el.component
                    })
                } else if (el.prio === "High") {
                    console.log("enqueue high"); 
                    return el.component
                } else {
                    console.log("error")
                }
            })}
        </div>
        <div className="selection margin-10 center">
            <select id="line-color" value={color} onChange={e => setColor(e.target.value)}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="#801638">Berry </option>
                <option value="#027878">Teal</option>
            </select>
            <select id="prio" value={prio} onChange={e => setPrio(e.target.value)}>
                <option value="Low">Low</option>
                <option value="High">High</option>
            </select>
        </div>
        <button className="block button center" onClick={buttonPressed}>Draw Line</button>
        <div id="data" display="none">
            <div id="start-x" value="10"></div>
            <div id="start-y" value="10"></div>
            <div id="end-x" value="390"></div>
            <div id="end-y" value="10"></div>
        </div>
      </div>
    );
  }
  
  export default Hook;