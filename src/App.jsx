import { useState } from "react";
import StartQuiz from "./assets/components/StartQuiz";
import Quiz from "./assets/components/Quiz.jsx";

// https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple

function App() {
  const [quizData, setQuizData] = useState("");

  async function newQuiz() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
    );
    const data = await res.json();
    setQuizData(data);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const entries = Object.fromEntries(formData.entries());
    console.log(entries);
  }

  return (
    <>
      <div className="container">
        {!quizData ? <StartQuiz onClick={newQuiz} /> : null}
        {quizData ? <Quiz quizData={quizData} onSubmit={handleSubmit} /> : null}
      </div>
    </>
  );
}

export default App;
