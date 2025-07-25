import { useState } from "react";
import StartQuiz from "./assets/components/StartQuiz";
import QuestionCard from "./assets/components/QuestionCard";
import response from "./assets/response.js";
import { insertRandomly } from "./assets/utils.js";
import { decode } from "html-entities";

// https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple

const QuestionsElement = response?.results?.map((item, index) => {
  const allAnswers = insertRandomly(
    item.incorrect_answers,
    item.correct_answer
  );
  return (
    <QuestionCard
      key={index}
      question={decode(item.question)}
      answers={allAnswers}
    />
  );
});

function Quiz() {
  return (
    <section>
      <div className="container">
        <form className="quiz">
          <div className="questions">{QuestionsElement}</div>
          <input type="submit" value="Check answers" />
        </form>
      </div>
    </section>
  );
}

function App() {
  return <>{Quiz()}</>;
}

export default App;
