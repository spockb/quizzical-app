import styles from "./StartQuiz.module.css";
export default function StartQuiz({ newQuiz }) {
  return (
    <>
      <section>
        <div>
          <h1>Trivia Time!</h1>
          <p>Extremely epic trivia game</p>
          <button className={styles.button} onClick={newQuiz}>
            Start Trivia!
          </button>
        </div>
      </section>
    </>
  );
}
