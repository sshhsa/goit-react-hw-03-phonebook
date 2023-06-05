import { Component } from 'react';

import PropTypes from 'prop-types';
import css from '../Style.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleOnSubmitForm = event => {
    event.preventDefault();
    this.props.formSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.formSubmit} onSubmit={this.handleOnSubmitForm}>
        <label className={css.formLabel}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleInputChange}
            className={css.formInput}
          />
        </label>
        <label className={css.formLabel}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleInputChange}
            className={css.formInput}
          />
        </label>
        <button type="submit" className={css.buttonSubmitForm}>Add contact</button>
      </form>
    );
  }
}

Form.propTypes = {
  formSubmit: PropTypes.func.isRequired
}

export default Form;