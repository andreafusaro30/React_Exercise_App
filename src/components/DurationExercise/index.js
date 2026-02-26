import React, { useState, useRef } from "react";

function DurationExercise({ name }) {

    const [timeSecs, setTimeSecs] = useState(0);
    const timerRef = useRef();
//start timer
    const startTimer = () => {
        if(!timerRef.current){
            timerRef.current = setInterval(() => {
                setTimeSecs(prev => prev + 1);
            }, 1000);
        }
    };
//reset timer to a reasonable value
    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setTimeSecs(0);
    };
//formatting the timer
    const formatTime = () => {
        let mins = Math.floor(timeSecs / 60);
        let secs = timeSecs % 60;

        return(
            String(mins).padStart(2, "0")+
            ":" +
            String(secs).padStart(2, "0")
        );
    };
//buttons
    return(
        <div>
            <h1>{name}</h1>
            <h2>{formatTime()}</h2>

            <button onClick={startTimer}>
                Start
            </button>

            <button onClick={resetTimer}>
                Reset
            </button>
        </div>
    );

} 
export default DurationExercise;