import { useState } from 'react'
import Mcq from "./Mcq";
import Navbar from './Navbar';

 const Html = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
    const htmlQestion=[
        {
            qesnum:"1",
            proqes:"Which of the following colors contain equal amounts of RBG?",
            op1:"white",
            op2:"gray",
            op3:"black",
            op4:"All of the above",
            correctAnswer:"All of the above"
        },
        {
            qesnum:"2",
            proqes:"The correct sequence of HTML tags for starting a webpage is - ",
            op1:"Head, Title, HTML, body",
            op2:"HTML, Body, Title, Head",
            op3:"HTML, Head, Title, Body",
            op4:"HTML, Head, Title, Body",
            correctAnswer:"HTML, Head, Title, Body"

        },
        {
          qesnum:"3",
          proqes:"Which of the following element is responsible for making the text bold in HTML?",
          op1:"<pre>",
          op2:"<a>",
          op3:"<b>",
          op4:"<br>",
          correctAnswer:"<b>"

      },
      {
        qesnum:"4",
        proqes:"Which of the following tag is used for inserting the largest heading in HTML?",
        op1:"<h3>",
        op2:"<h1>",
        op3:"<h5>",
        op4:"<h6>",
        correctAnswer:"<h1>"

    },
      {
        qesnum:"5",
        proqes:" How to create an unordered list (a list with the list items in bullets) in HTML?",
        op1:"<ul>",
        op2:"<ol>",
        op3:"<li>",
        op4:"<i>",
        correctAnswer:"<ul>"

    },
    {
      qesnum: "6",
      proqes: "Which HTML tag is used to define an internal style sheet?",
      op1: "<style>",
      op2: "<script>",
      op3: "<css>",
      op4: "<link>",
      correctAnswer: "<style>"
    },
    {
      qesnum: "7",
      proqes: "Which HTML attribute is used to define inline styles?",
      op1: "style",
      op2: "class",
      op3: "id",
      op4: "font",
      correctAnswer: "style"
    },
    {
      qesnum: "8",
      proqes: "Which is the correct HTML element for inserting a line break?",
      op1: "<break>",
      op2: "<lb>",
      op3: "<br>",
      op4: "<hr>",
      correctAnswer: "<br>"
    },
    {
      qesnum: "9",
      proqes: "Which HTML tag is used to define a hyperlink?",
      op1: "<a>",
      op2: "<link>",
      op3: "<nav>",
      op4: "<href>",
      correctAnswer: "<a>"
    },
    {
      qesnum: "10",
      proqes: "Which HTML element is used to specify a footer for a document or section?",
      op1: "<bottom>",
      op2: "<section>",
      op3: "<footer>",
      op4: "<foot>",
      correctAnswer: "<footer>"
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
  
      htmlQestion.forEach((q) => {
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
        <h1>HTML Question</h1>
        <form onSubmit={handleSubmit}>
          {htmlQestion.map((qesn) => (
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
            <h2>Your Score: {score} / {htmlQestion.length}</h2>
            <ul>
              {htmlQestion.map((q, index) => (
                <li key={index}>
                  Q{q.qesnum}: {q.proqes}
                  <br />
                 Your Answer: {userAnswers[q.qesnum] || "No answer"}
                  <br />
                  Correct Answer: {q.correctAnswer}
                  <br />
                  <span style={{color: userAnswers[q.qesnum] === q.correctAnswer ? "green" : "red" }}>
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
  };
  export default Html