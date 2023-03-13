import { useState, useEffect } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Quizz from './components/Quizz'
import { nanoid } from 'nanoid'

function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
        const myObject = {
          items: data.results.map((item, index) => {
            return {
              key: index,
              id: nanoid(),
              question: item.question,
              answers: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5).map((answer, index) => ({ key: { index }, text: answer, isClicked: false })),
              correctAnswer: item.correct_answer,
            }

          })
        };
        console.log(myObject)
      })
      .catch(error => {
        console.error(error);
      });
  }, [])



  return (
    <div className="App">
      <Homepage />
      <Quizz />
    </div>
  )
}

export default App
