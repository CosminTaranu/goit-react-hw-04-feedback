import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
