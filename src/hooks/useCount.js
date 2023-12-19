import { useState } from "react"


export const useCount = (initial = 0, max) => {
    const [count, setCount] = useState(initial);

    const decrement = () => {
        if(count === 0){
            return setCount(count);
        }
        setCount(count - 1);
    };

    const increment = () => {
        if (count === max){
            return setCount(count);
        }
        setCount(count + 1);
    }

    const reset = () => {
        setCount(initial);
    };

    return{
        count,
        decrement,
        increment,
        reset,
    };
};