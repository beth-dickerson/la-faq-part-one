import React from 'react';

const Answer = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="column sm-8">
          <i onClick={props.handleClick} className="fa fa-minus-square-o" aria-hidden="true"></i>
          {props.question} <br />
          {props.answer}
        </div>
      </div>
    </div>
  )
}

export default Answer;
