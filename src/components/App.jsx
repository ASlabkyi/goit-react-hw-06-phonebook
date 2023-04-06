import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Phonebook></Phonebook>
        </PersistGate>
      </Provider>
    </>
  );
};
