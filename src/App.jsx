import { useState } from "react";
import StartQuiz from "./assets/components/StartQuiz";
import response from "./assets/response.js";
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

  return (
    <>
      {!quizData ? <StartQuiz onClick={newQuiz} /> : null}
      {quizData ? <Quiz response={quizData} /> : null}
    </>
  );
}

export default App;
