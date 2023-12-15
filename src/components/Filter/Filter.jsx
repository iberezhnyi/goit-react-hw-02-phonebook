import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, searchUser }) => {
  return (
    <label>
      <p className={css['filter-text']}>Find contacts by name</p>
      <input
        className={css['filter-input']}
        onChange={searchUser}
        value={value}
        type="text"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  searchUser: PropTypes.func.isRequired,
};
