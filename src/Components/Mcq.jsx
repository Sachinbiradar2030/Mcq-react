import React from 'react';
import './Mcq.css';

const Mcq = (props) => {
  return (
    <div className="mcq">
      <h3>Q{props.qesnum}: {props.proqes}</h3>
      <input 
        type="radio" 
        name={props.qesnum} 
        onChange={() => props.handleAnswer(props.qesnum, props.op1)} 
      />A {props.op1}
      <br />
      <input 
        type="radio" 
        name={props.qesnum} 
        onChange={() => props.handleAnswer(props.qesnum, props.op2)} 
      />B {props.op2}
      <br />
      <input 
        type="radio" 
        name={props.qesnum} 
        onChange={() => props.handleAnswer(props.qesnum, props.op3)} 
      />C {props.op3}
      <br />
      <input 
        type="radio" 
        name={props.qesnum} 
        onChange={() => props.handleAnswer(props.qesnum, props.op4)} 
      />D {props.op4}
      <br />
    </div>
  );
}

export default Mcq;
