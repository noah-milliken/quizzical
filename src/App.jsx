import { useState, useEffect } from 'react'
import './App.css'
import { nanoid } from 'nanoid'
import Questions from './components/Questions'

function App() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5&category=22&difficulty=easy&type=multiple')
      .then(res => res.json())
      .then(data => {
        const questionObj = {
          items: data.results.map((item, index) => {
            return {
              key: index,
              id: nanoid(),
              question: item.question,
              answers: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
              correctAnswer: item.correct_answer,
            }

          })
        };
        console.log(questionObj)
        setQuestions(() => questionObj.items)

      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  return (
    <main>
      <Questions questions={questions} />
    </main>
  )
}

export default App
