import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    createUser: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.createUser(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={css['contact-form']} onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            className={css['contact-form-input']}
            onChange={this.handleChange}
            value={name}
            type="text"
            name="name"
            required
          />
        </label>

        <label>
          Number
          <input
            className={css['contact-form-input']}
            onChange={this.handleChange}
            value={number}
            type="tel"
            name="number"
            required
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
