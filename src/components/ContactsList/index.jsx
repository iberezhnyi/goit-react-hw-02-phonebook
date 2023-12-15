import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';

const ContactsList = ({ user, deleteUser }) => {
  return (
    <ul>
      {user.map(el => (
        <ContactItem user={el} key={el.id} deleteUser={deleteUser} />
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
