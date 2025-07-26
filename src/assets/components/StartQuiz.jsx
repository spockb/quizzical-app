import styles from "./StartQuiz.module.css";
export default function StartQuiz({ newQuiz }) {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.div}>
          <h1 className={styles.h1}>Trivia Time!</h1>
          <p className={styles.p}>Extremely epic trivia game</p>
          <button className={styles.button} onClick={newQuiz}>
            Start Trivia!
          </button>
        </div>
      </section>
    </>
  );
}
