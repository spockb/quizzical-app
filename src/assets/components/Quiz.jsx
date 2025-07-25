import QuestionCard from "./QuestionCard";
import { insertRandomly } from "../utils";
import { decode } from "html-entities";
import styles from "./Quiz.module.css";

export default function Quiz({ quizData, onSubmit }) {
  const QuestionsElement = quizData?.results?.map((item, index) => {
    const allAnswers = insertRandomly(
      item.incorrect_answers,
      item.correct_answer
    );
    return (
      <QuestionCard
        key={index}
        index={index}
        question={decode(item.question)}
        answers={allAnswers}
      />
    );
  });
  return (
    <section>
      <form onSubmit={onSubmit}>
        <div className="questions">{QuestionsElement}</div>
        <input type="submit" value="Check answers" />
      </form>
    </section>
  );
}
