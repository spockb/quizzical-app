import styles from "./StartQuiz.module.css";
export default function StartQuiz({ onClick }) {
  return (
    <>
      <section>
        <div>
          <h1>Trivia Time!</h1>
          <p>The most epic trivia app</p>
          <button onClick={onClick}>Start Trivia!</button>
        </div>
      </section>
    </>
  );
}
