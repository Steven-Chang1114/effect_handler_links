import { useState } from "react";

function Hook() {
    let [num, setNum] = useState(0);

    return (
      <div>
        {num}
        <button onClick={() => setNum(1)}>set number to 1</button>
        <button onClick={() => setNum(2)}>set number to 2</button>
      </div>
    );
  }
  
  export default Hook;