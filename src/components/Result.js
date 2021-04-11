import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <>
      {props.quizResult.map((item) => {
        return <p className="report" key={item.idQuestion}>
          <span>{item.idQuestion + 1}</span>
          <span> {item.titleQuestion}</span>
          <span> پاسخ : </span>
          <strong> {item.questionAns}</strong>
        </p>
      })

      }
    </>
  );
}

Result.propTypes = {
  quizResult: PropTypes.array.isRequired
};

export default Result;
