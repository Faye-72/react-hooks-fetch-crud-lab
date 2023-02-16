import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => {
        setQuiz(data);
        console.log(data);
      });
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setQuiz(quiz.filter((q) => q.id != id));
      });
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {quiz.map((question) => {
          return (
            <QuestionItem question={question} handleDelete={handleDelete} />
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
