import QuestionCard from "./QuestionCard";
import styles from "./Quiz.module.css";

export default function Quiz({
  quizData,
  onSubmit,
  selectedAnswers,
  isQuizSubmitted,
  newQuiz,
}) {
  const correctAnswers = quizData.map((item) => item.correctAnswer);
  const guessedCorrect =
    isQuizSubmitted &&
    selectedAnswers.filter((item, i) => correctAnswers[i] === item);
  const numberCorrect = isQuizSubmitted && guessedCorrect.length;

  const QuestionsElement = quizData.map((item, i) => {
    return (
      <QuestionCard
        key={i}
        index={i}
        question={item.question}
        answers={item.allAnswers}
        selectedAnswer={selectedAnswers[i]}
        correctAnswer={correctAnswers[i]}
        isQuizSubmitted={isQuizSubmitted}
      />
    );
  });

  return (
    <section>
      <form onSubmit={onSubmit}>
        <div className={styles.questions}>{QuestionsElement}</div>
        {!isQuizSubmitted ? (
          <input type="submit" value="Check answers" />
        ) : (
          <div className={styles.results}>
            <span>You scored {numberCorrect}/5 correct answers</span>
            <button className={styles.button} type="button" onClick={newQuiz}>
              Play again
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
