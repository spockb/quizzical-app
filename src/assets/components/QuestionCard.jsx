import styles from "./QuestionCard.module.css";
export default function QuestionCard({ question, answers }) {
  const questionElements = answers.map((answer, index) => {
    return (
      <div key={answer}>
        <input type="radio" id={answer} name="option" value={answer} />
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
