/*import logo from './logo.svg';
import './App.css';
*/
import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import StretchFlexExercise from "./components/StretchFlexExercise";


function App() {
  const [chosenExercise, setChosenExercise]= useState();
//exercises
  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Planks", type: "duration" },
    { name: "flexes and stretches", type: "flex"},
    
  ];
//if exercise is repetition
  if (chosenExercise) {
    if(chosenExercise.type === "repetition"){
      return(
        <RepetitionExercise
          name={chosenExercise.name}
          />
      );
    }
//if exercise is duration
    if(chosenExercise.type === "duration"){
      return(
        <DurationExercise
          name={chosenExercise.name}
        />
      );
    }
    //if exercise is flex/stretches
    if(chosenExercise.type === "flex"){
      return(
        <StretchFlexExercise
          name={chosenExercise.name}
        />
      );
    }
  }

  return(
    <div>
      <h1> Exercise Tracker </h1>

      {exercises.map((exercise, index) => (
        <button
          key = {index}
          onClick={() => setChosenExercise(exercise)}
          >
            {exercise.name}
            </button>
      ))}
      </div>
  );
}
export default App;

  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  */
