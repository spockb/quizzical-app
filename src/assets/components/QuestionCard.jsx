import styles from "./QuestionCard.module.css";
export default function QuestionCard({ question, answers, index }) {
  const questionElements = answers.map((answer) => {
    return (
      <div key={answer}>
        <input type="radio" id={answer} name={index} value={answer} />
        <label htmlFor={answer}>{answer}</label>
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
