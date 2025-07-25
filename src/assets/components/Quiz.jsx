import QuestionCard from "./QuestionCard";
import { insertRandomly } from "../utils";
import { decode } from "html-entities";

export default function Quiz({ response }) {
  const QuestionsElement = response?.results?.map((item, index) => {
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
      <div className="container">
        <form className="quiz">
          <div className="questions">{QuestionsElement}</div>
          <input type="submit" value="Check answers" />
        </form>
      </div>
    </section>
  );
}
