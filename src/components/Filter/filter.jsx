import propTypes from 'prop-types';
import { FilterStyled } from '../Component.styled';

const Filter = ({ title, value, onChange }) => {
  return (
    <FilterStyled>
      <span>{title} </span>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </FilterStyled>
  );
};

Filter.propTypes = {
  title: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
