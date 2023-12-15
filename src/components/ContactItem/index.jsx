import css from './index.module.css';

const ContactItem = ({ user: { name, number, id }, deleteUser }) => {
  return (
    <li className={css['contact-item']}>
      <p className={css['contact-text']}>
        {name}: {number}
      </p>
      <button
        className={css['btn-delete']}
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
