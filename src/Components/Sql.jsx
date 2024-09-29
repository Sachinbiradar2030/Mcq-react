import Mcq from "./Mcq";
import { useState } from 'react'
import Navbar from "./Navbar";

 const Sql= () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
    const SqlQestion=[
        {
            qesnum:"1",
            proqes:"What is the full form of SQL?",
            op1:"Structured Query List",
            op2:"Structure Query Language",
            op3:"Sample Query Language",
            op4:"None of these.",
            correctAnswer:"Structure Query Language"
        },
        {
            qesnum:"2",
            proqes:"Which of the following is not a valid SQL type?",
            op1:"FLOAT",
            op2:"NUMERIC",
            op3:"DECIMAL",
            op4:"CHARACTER",
            correctAnswer:"CHARACTER"
        },
        {
            qesnum:"3",
            proqes:"Which of the following is not a DDL command?",
            op1:"TRUNCATE",
            op2:"ALTER",
            op3:"CREATE",
            op4:"UPDATE",
            correctAnswer:"UPDATE"
        },
        {
            qesnum:"4",
            proqes:"Which of the following are TCL commands?",
            op1:"COMMIT and ROLLBACK",
            op2:"UPDATE and TRUNCATE",
            op3:"SELECT and INSERT",
            op4:"GRANT and REVOKE",
            correctAnswer:"COMMIT and ROLLBACK"
        },
        {
          qesnum: "5",
          proqes: "Which SQL statement is used to delete data from a database?",
          op1: "DELETE",
          op2: "REMOVE",
          op3: "DROP",
          op4: "TRUNCATE",
          correctAnswer: "DELETE"
        },
        {
          qesnum: "6",
          proqes: "Which of the following is a DCL command in SQL?",
          op1: "SELECT",
          op2: "DELETE",
          op3: "GRANT",
          op4: "INSERT",
          correctAnswer: "GRANT"
        },
        {
          qesnum: "7",
          proqes: "Which SQL clause is used to restrict the number of rows returned by a query?",
          op1: "LIMIT",
          op2: "WHERE",
          op3: "HAVING",
          op4: "GROUP BY",
          correctAnswer: "LIMIT"
        },
        {
          qesnum: "8",
          proqes: "What is the purpose of the SQL AS clause?",
          op1: "To rename a table",
          op2: "To rename a column or table with an alias",
          op3: "To delete a column",
          op4: "To perform joins",
          correctAnswer: "To rename a column or table with an alias"
        },
        {
          qesnum: "9",
          proqes: "Which of the following SQL statements is used to retrieve data from a database?",
          op1: "INSERT",
          op2: "UPDATE",
          op3: "SELECT",
          op4: "DELETE",
          correctAnswer: "SELECT"
        },
        {
          qesnum: "10",
          proqes: "Which of the following aggregate functions in SQL counts the number of rows?",
          op1: "SUM()",
          op2: "COUNT()",
          op3: "AVG()",
          op4: "MAX()",
          correctAnswer: "COUNT()"
        }
    ];
    const handleAnswer = (qesnum, answer) => {
      setUserAnswers(prevAnswers => ({
        ...prevAnswers,
        [qesnum]: answer
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let correctCount = 0;
  
      SqlQestion.forEach((q) => {
        if (userAnswers[q.qesnum] === q.correctAnswer) {
          correctCount++;
        }
      });
  
      setScore(correctCount);
    };
    return (
      <>
      <Navbar/>
      <div className="wrapper">
      <div className="javaq">
        <h1>SQL Question</h1>
        <form onSubmit={handleSubmit}>
          {SqlQestion.map((qesn) => (
            <Mcq
              key={qesn.qesnum}
              qesnum={qesn.qesnum}
              proqes={qesn.proqes}
              op1={qesn.op1}
              op2={qesn.op2}
              op3={qesn.op3}
              op4={qesn.op4}
              handleAnswer={handleAnswer}
            />
          ))}
          <br />
          <button type="submit">Submit</button>
        </form>
        </div>
  
        {score !== null && (
          <div className="result">
            <h2>Your Score: {score} / {SqlQestion.length}</h2>
            <ul>
              {SqlQestion.map((q, index) => (
                <li key={index}>
                  Q{q.qesnum}: {q.proqes}
                  <br />
                  Your Answer: {userAnswers[q.qesnum] || "No answer"}
                  <br />
                  Correct Answer: {q.correctAnswer}
                  <br />
                  <span style={{ color: userAnswers[q.qesnum] === q.correctAnswer ? "green" : "red" }}>
                    {userAnswers[q.qesnum] === q.correctAnswer ? "Correct" : "Wrong"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
      </>
    );
}
export default Sql;




