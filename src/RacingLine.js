import './RacingLine.css';
import { useDeferredValue, useTransition, useState, useRef, useEffect } from 'react';
import { useFrame } from "react-three-fiber";

function Hook() {
    const startx = 10
    const starty = 10
    const endx = 390
    const height = 25
    const interval = 40

    let [prio, setPrio] = useState("Low");
    let [color, setColor] = useState("red");
    let [y, setY] = useState(starty);
    const ctxRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d")
        ctxRef.current = context;
    }, [])

    let addLine = (rate) => {
        const ctx = ctxRef.current
        ctx.fillStyle= color;

        let x = startx
        window.requestAnimationFrame(function animate() {
            if (x < endx) {
                x += rate
                ctx.fillRect(x, y, 2, height);
                window.requestAnimationFrame(animate)
            }
        })
    }

    let buttonPressed = () => {
        switch(prio) {
            case "High":
                console.log("enqueue high"); 
                addLine(2)
                setY(prev => prev + interval)
                break;
            case "Low":
                console.log("enqueue low"); 
                addLine(1)
                setY(prev => prev + interval)
                break;
            default:
                console.log("error") 
        }
    }

    return (
      <div>
        <canvas id="box" width="400" height="600" className="box center block" ref={canvasRef}></canvas>
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