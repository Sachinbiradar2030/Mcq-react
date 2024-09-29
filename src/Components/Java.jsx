import { useState } from 'react'
import Mcq from './Mcq';
import Navbar from './Navbar';

const Java = () => {
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(null);
    const javaQestion=[
        {
            qesnum:"1",
            proqes:"Number of primitive data types in Java are?",
            op1:"6",
            op2:"7",
            op3:"8",
            op4:"9",
             correctAnswer: "8"

        },
        {
            qesnum:"2",
            proqes:"What is the size of float and double in java?",
            op1:"32 and 64",
            op2:"64 and 32",
            op3:"64 and 64",
            op4:"32 and 32",
             correctAnswer: "32 and 64"
        },
        {
            qesnum:"3",
            proqes:"Automatic type conversion is possible in which of the possible cases?",
            op1:"Byt to int",
            op2:"Int to long",
            op3:"long to int",
            op4:"short to int",
             correctAnswer: "long to int"
        },
        {
            qesnum:"4",
            proqes:"Select the valid statement.",
            op1:"char[] ch=new char()",
            op2:"char[] ch=new char[5]",
            op3:"char[] ch=new char(5)",
            op4:"char[] ch=new char[]",
             correctAnswer: "char[] ch=new char[]"
        },
        {
            qesnum:"5",
            proqes:"Which component is used to compile, debug and execute the java programs?",
            op1:"JRE",
            op2:"JIT",
            op3:"JDK",
            op4:"JVM",
             correctAnswer: "JDK"
        },
        {
            qesnum:"6",
            proqes:"Which one of the following is not a Java feature?",
            op1:"Object-oriented",
            op2:"Use of pointers",
            op3:"Portable",
            op4:"Dynamic and Extensible",
             correctAnswer: "Use of pointers"
        },
        {
            qesnum:"7",
            proqes:"Which of these cannot be used for a variable name in Java?",
            op1:"identifier & keyword",
            op2:"identifier",
            op3:"keyword",
            op4:"none of the mentioned",
             correctAnswer: "keyword"
        },
        {
            qesnum:"8",
            proqes:"Which of the following is not an OOPS concept in Java?",
            op1:"Polymorphism",
            op2:"Inheritance",
            op3:"Compilation",
            op4:"Encapsulation",
             correctAnswer: "Compilation"
        },
        {
            qesnum:"9",
            proqes:" Which of these keywords are used for the block to be examined for exceptions?",
            op1:"check",
            op2:"throw",
            op3:"catch",
            op4:"try",
             correctAnswer: "try"
        },
        {
            qesnum:"10",
            proqes:"What is not the use of “this” keyword in Java?",
            op1:"Referring to the instance variable when a local variable has the same name",
            op2:"Passing itself to the method of the same class",
            op3:"Passing itself to another method",
            op4:"Calling another constructor in constructor chaining",
             correctAnswer: "Passing itself to the method of the same class"
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
  
      javaQestion.forEach((q) => {
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
        <h1>JAVA Question</h1>
        <form onSubmit={handleSubmit}>
          {javaQestion.map((qesn) => (
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
            <h2>Your Score: {score} / {javaQestion.length}</h2>
            <ul>
              {javaQestion.map((q, index) => (
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
  };
  export default Java;