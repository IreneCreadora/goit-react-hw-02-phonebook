import propTypes from 'prop-types';
import ContactItem from './contactItem';
import { ContactListStyled } from '../Component.styled';

const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <ContactListStyled>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            contact={{ id, name, number }}
            key={id}
            onDelete={onDelete}
          />
        );
      })}
    </ContactListStyled>
  );
};

ContactList.propTypes = {
  filteredContacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDelete: propTypes.func.isRequired,
};

export default ContactList;
