import React, { useEffect, useRef, useState } from 'react';

const UseEffectTest = () => {

    const [count, setCount] = useState(0);
    const perfCount = useRef(0);

    useEffect(() => {
        // 1. Obyekt emas, uning 'current' qiymatini solishtiramiz
        const prev = perfCount.current;

        if (count > prev) {
            alert("Increased");
        } else if (count < prev) {
            alert("Decreased");
        } else if (count === 0) {
            alert("Restarted");
        }
        // 2. MUHIM: Har renderdan keyin ref qiymatini yangilaymiz
        perfCount.current = count;
    }, [count]);



    return (
        <div className='flex justify-center w-full h-[100vh] items-center gap-3.5'>
            <button onClick={() => setCount(count + 1)}>Plus</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}>Minus</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default UseEffectTest;