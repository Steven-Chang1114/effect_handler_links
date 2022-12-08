import { useState } from "react";

function Hook() {
  let [num, setNum] = useState(0);
    let [numPrev, setNumPrev] = useState(0);

    return (
      <div>
        <div>
          {num}
          <button onClick={() => setNum(1)}>set number to 1</button>
          <button onClick={() => setNum(2)}>set number to 2</button>
        </div>

        <div>
          {numPrev}
          <button onClick={() => setNumPrev(prev => prev - 1)}>sub number by 1</button>
          <button onClick={() => setNumPrev(prev => prev + 1)}>add number by 1</button>
        </div>
      </div>
    );
  }
  export default Hook;