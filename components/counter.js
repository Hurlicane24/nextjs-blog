import React, { useState } from "react";

export default function Counter({step, buttonColor}) {
    const [count, setCount] = useState(0);

    const reset = () => {
        setCount((previous) => {
            const New = previous + step;
            if(New > 10) {
                return(0);
            }
            else {
                return(New);
            }
        })
    }

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={reset} style={{backgroundColor: buttonColor}}>Increment</button>
      </div>
    );
}
