import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts: (state, actions) => {
      const isDuplicate = state.contacts.some(
        contact => contact.name === actions.payload.name
      );

      if (isDuplicate) {
        alert(`${actions.payload.name} is already in contacts`);
        return;
      }
      state.contacts.push(actions.payload);
    },
    deleteContact: (state, actions) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== actions.payload
      );
    },
    filterContacts: (state, actions) => {
      state.filter = actions.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

export const persistContactsReducer = persistReducer(
  persistConfig,
  phonebookSlice.reducer
);

export const { addContacts, deleteContact, filterContacts } =
  phonebookSlice.actions;
