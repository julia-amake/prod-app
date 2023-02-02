import React, {useState} from 'react';
import s from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1 className={`${s.title}`}>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    );
};

export default Counter;
