import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import API from '../api';

const Questions = () => {
  const { topic, type } = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await API.get(`/questions/${topic}/${type}`);
        setQuestions(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuestions();
  }, [topic, type]);

  return (
    <div>
      <h2>{topic.toUpperCase()} - {type.toUpperCase()} Questions</h2>
      {questions.length > 0 ? (
        questions.map(q => <QuestionCard key={q._id} question={q} />)
      ) : (
        <p>No questions found.</p>
      )}
    </div>
  );
};

export default Questions;
