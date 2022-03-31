import React from 'react';

const initialState = {
  counter: '',
  year: '',
  holidayList: [],
};

const AppContext = React.createContext(initialState);

export default AppContext;
