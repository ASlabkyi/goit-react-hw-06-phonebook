import { PropTypes } from 'prop-types';
import { ListItem, Name, Number, DeleteButton } from './ContactEl.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/phonebookSlice';

export const ContactEl = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ListItem key={id}>
      <p>
        <Name>{name}</Name>: <Number>{number}</Number>
      </p>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteButton>
    </ListItem>
  );
};

ContactEl.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
