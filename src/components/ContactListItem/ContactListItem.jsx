import PropTypes from 'prop-types';
import { ListItem } from './ContactListItem.styled';
import { ButtonAddDeleteContact } from 'components/ContactForm/ContactForm.styled';

export const ContactListItem = ({ contact, onDelete }) => {
    return (
        <>
        <ListItem key={contact.id}>
          {contact.name}: {contact.number}
          <ButtonAddDeleteContact onClick={() => onDelete(contact.id)}>Delete</ButtonAddDeleteContact>
        </ListItem>
       </>
        
    )
}
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired,
    onDelete:PropTypes.func.isRequired
};