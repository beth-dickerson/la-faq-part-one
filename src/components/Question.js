import React from 'react';

const Question = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="invisible column sm-8">
          <i onClick={props.handleClick} className="fa fa-plus-square" aria-hidden="true"></i>
          {props.question}
        </div>
      </div>
    </div>
  )
}

export default Question;
