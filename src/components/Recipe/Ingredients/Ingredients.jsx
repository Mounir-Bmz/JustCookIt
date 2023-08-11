import PropTypes from 'prop-types';

import './style.scss';

const Ingredients = ({ list }) => (
  <ul className="ingredients">
    {list.map((ingredient) => (
      <li className="ingredient" key={ingredient.id}>
        <span className="ingredient-quantity">
          {ingredient.quantity} {ingredient.unit}
        </span>{' '}
        {ingredient.name}
      </li>
    ))}
  </ul>
);

Ingredients.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      unit: PropTypes.string,
      quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }).isRequired
  ).isRequired,
};

export default Ingredients;
