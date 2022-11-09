import './RacingLine.css';

function Hook() {
    return (
      <div>
        <canvas id="box" width="400" height="600" className="box center block"></canvas>
        <div className="selection margin-10 center">
            <select id="line-color">
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="#801638">Berry </option>
                <option value="#027878">Teal</option>
            </select>
            <select id="prio">
                <option value="Low">Low</option>
                <option value="High">High</option>
            </select>
        </div>
        <button className="block button center" onClick={()=>{}}>Draw Line</button>
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