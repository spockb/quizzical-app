import styles from "./QuestionCard.module.css";
import clsx from "clsx";

export default function QuestionCard({
  question,
  answers,
  index,
  selectedAnswer,
  correctAnswer,
  isQuizSubmitted,
}) {
  const questionElements = answers.map((answer) => {
    const statusClass = clsx({
      [styles.correct]: isQuizSubmitted && answer === correctAnswer,
      [styles.incorrect]:
        isQuizSubmitted &&
        answer === selectedAnswer &&
        selectedAnswer !== correctAnswer,
      [styles.disabled]:
        isQuizSubmitted &&
        answer !== selectedAnswer &&
        answer !== correctAnswer,

      [styles.submitted]: isQuizSubmitted,
    });

    return (
      <div key={answer}>
        <input
          disabled={isQuizSubmitted}
          type="radio"
          id={answer}
          name={index}
          value={answer}
        />
        <label className={statusClass} htmlFor={answer}>
          {answer}
        </label>
      </div>
    );
  });
  return (
    <>
      <fieldset>
        <h2>{question}</h2>
        <div className={styles.answers}>{questionElements}</div>
      </fieldset>
    </>
  );
}
