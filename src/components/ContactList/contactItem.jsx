import propTypes from 'prop-types';
import { ContactItemStyled, DeleteBtn } from '../Component.styled';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <ContactItemStyled>
      <p>{name}</p>
      <p>{number}</p>
      <DeleteBtn type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteBtn>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  contact: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  }),
  onDelete: propTypes.func.isRequired,
};

export default ContactItem;
