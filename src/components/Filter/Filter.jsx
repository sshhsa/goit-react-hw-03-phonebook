import PropTypes from 'prop-types';
import css from '../Style.module.css';

const Filter = ({ text, onChange }) => {
  return (
    <label className={css.formLabel}>
      Filter by Name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={text}
        onChange={onChange}
        className={css.formInput}
      />
    </label>
  );
};

Filter.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Filter;