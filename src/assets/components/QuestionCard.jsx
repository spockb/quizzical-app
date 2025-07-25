import styles from "./QuestionCard.module.css";
import { decode } from "html-entities";

export default function QuestionCard({ question, answers, index }) {
  const questionElements = answers.map((answer) => {
    const decodedAnswer = decode(answer);
    return (
      <div key={decodedAnswer}>
        <input
          type="radio"
          id={decodedAnswer}
          name={index}
          value={decodedAnswer}
        />
        <label htmlFor={decodedAnswer}>{decodedAnswer}</label>
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
