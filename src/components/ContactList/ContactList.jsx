import { ContactListItem } from "components/ContactListItem/ContactListItem"
import PropTypes from 'prop-types';
import { ContactsList } from "./ContactList.styled";
export const ContactList = ({filteredContacts, onDelete}) => {
    return (
        <ContactsList>
      {filteredContacts.map((contact) => (
        <ContactListItem key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ContactsList>
    )
}
ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onDelete:PropTypes.func.isRequired
};