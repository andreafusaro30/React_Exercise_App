import React, { useState } from "react";

function RepetitionExercise({ name }) {
    const [counter, setCounter] = useState(0);
//buttons
    return(
        <div>
            <h1>{name}</h1>

            <h2> Reps: {counter}</h2>

            <button onClick={() => setCounter(counter+1)}>
                Complete Rep
            </button>

            <button onClick={() => setCounter(0)}>
                Reset
            </button>
        </div>
    );
}

export default RepetitionExercise;
