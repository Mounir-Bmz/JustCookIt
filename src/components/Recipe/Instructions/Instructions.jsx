import PropTypes from 'prop-types';

import './style.scss';

const Instructions = ({ steps }) => (
  <ol className="steps">
    {steps.map((instruction) => (
      <li key={instruction} className="step">
        {instruction}
      </li>
    ))}
  </ol>
);

Instructions.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Instructions;
