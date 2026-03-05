import React, { useState } from "react";

function StretchFlexExercise() {
    //providing user with a list of pilate stretches to choose from
    const [flexes] = useState([
        "Butterflies",
        "Cat Stretch",
        "Roll like a Ball",
        "Lunge Stretch",
        "Seal",
        "The Hundred",
        "Single Leg Stretch",
        "Saw",
        "Teaser",
        "Corkscrew",
    ]);
    
    return(
        <div>
            <h1>Stretch and Flex Exercises:</h1>
            <ul>
                {flexes.map((flex, index)=> (
                    <li key = {index}>{flex}</li>
                ))}
                </ul>
        </div>
    );
} 
export default StretchFlexExercise;