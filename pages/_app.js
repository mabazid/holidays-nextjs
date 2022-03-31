import { useState } from 'react';
import DenseAppBar from '../components/layout/header';
import AppContext from '../store/AppContext';
import '../styles/globals.css';

async function fetchData(year, countryCode) {
  const response = await fetch(`https://date.nager.at/api/v3/publicholidays/${ year }/${ countryCode }`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

function MyApp({ Component, pageProps }) {
  const [countryCode, setCountryCode] = useState('');
  const [year, setYear] = useState('2022');
  const [list, setList] = useState([]);

  // const dataListHandler = (data) => {
  //   setCountryCode(data.country.code);
  //   setYear(data.year);
  // };

  const listHandler = async (year, country) => {
    await setList(await fetchData(year, country));
    console.log('list set');
  };


  return (
    <AppContext.Provider value={ {
      setHolidayList: listHandler,
      country: countryCode,
      holidayList: list,
      year: year,
    } }
    >
      <DenseAppBar>
        <Component { ...pageProps } />
      </DenseAppBar>
    </AppContext.Provider>
  );
}

export default MyApp;
