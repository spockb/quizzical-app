import { useState } from "react";
import { decode } from "html-entities";
import StartQuiz from "./assets/components/StartQuiz";
import Quiz from "./assets/components/Quiz.jsx";

// https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple

function App() {
  const [quizData, setQuizData] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState("");
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  async function newQuiz() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
    );
    const rawData = await res.json();
    const cleanedData = processQuizData(rawData);
    setQuizData(cleanedData);
    setSelectedAnswers("");
    setIsQuizSubmitted(false);
  }

  function processQuizData(rawData) {
    return rawData.results.map((item) => {
      const correct = decode(item.correct_answer);
      const incorrect = item.incorrect_answers.map(decode);
      const question = decode(item.question);

      return {
        question,
        correctAnswer: correct,
        incorrectAnswers: incorrect,
        allAnswers: insertRandomly(incorrect, correct),
      };
    });
  }

  function insertRandomly(incorrectAnswers, correctAnswer) {
    const all = [...incorrectAnswers];
    const randIndex = Math.floor(Math.random() * (all.length + 1));
    all.splice(randIndex, 0, correctAnswer);
    return all;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entriesObj = Object.fromEntries(formData.entries());
    const entriesArr = Object.values(entriesObj);
    setSelectedAnswers(entriesArr);
    setIsQuizSubmitted(true);
  }

  return (
    <>
      <div className="container">
        {!quizData ? <StartQuiz newQuiz={newQuiz} /> : null}
        {quizData ? (
          <Quiz
            quizData={quizData}
            onSubmit={handleSubmit}
            isQuizSubmitted={isQuizSubmitted}
            selectedAnswers={selectedAnswers}
            newQuiz={newQuiz}
          />
        ) : null}
      </div>
    </>
  );
}

export default App;
