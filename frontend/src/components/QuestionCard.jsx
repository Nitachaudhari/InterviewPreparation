const QuestionCard = ({ question }) => {
    return (
      <div style={{ border: "1px solid #ddd", margin: "1rem 0", padding: "1rem" }}>
        <h3>{question.question}</h3>
        <p><strong>Answer:</strong> {question.answer}</p>
      </div>
    );
  };
  
  export default QuestionCard;
  