import React, { useState, useEffect, useRef } from 'react'

function Timer(){
    const [timeElapsed, setTimeElapsed] = useState(0);
    const record = useRef();
    record.current = timeElapsed;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeElapsed(timeElapsed => timeElapsed + 30);
        }, 30);
        return() => {
            alert("Clear!!\nYour Record : " + record.current / 1000);
            clearInterval(Timer);
        };
    }, []);
    return(
        <div class="timerContainer">
            <div class="timerFront">{Math.floor(timeElapsed / 1000)}:</div>
            <div class="timerBack">{(timeElapsed % 1000) / 10}</div>
        </div>
    )
}

export default Timer;