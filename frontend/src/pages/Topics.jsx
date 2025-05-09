import { Link } from 'react-router-dom';

const topics = ["html", "css", "javascript", "react", "mongodb"];

const Topics = () => {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic}>
            <Link to={`/questions/${topic}/theory`}>{topic.toUpperCase()} - Theory</Link> |
            <Link to={`/questions/${topic}/practical`} style={{ marginLeft: "10px" }}>
              {topic.toUpperCase()} - Practical
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topics;
