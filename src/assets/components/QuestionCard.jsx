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
    const statusClass = isQuizSubmitted
      ? clsx({
          [styles.correct]: answer === correctAnswer,
          [styles.incorrect]:
            answer === selectedAnswer && selectedAnswer !== correctAnswer,
          [styles.disabled]: isQuizSubmitted,
        })
      : "";

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
        <legend>{question}</legend>
        {questionElements}
      </fieldset>
    </>
  );
}
