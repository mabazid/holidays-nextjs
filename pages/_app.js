import { useState } from 'react';
import DenseAppBar from '../components/layout/header';
import AppContext from '../store/AppContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [country, setCountry] = useState('germany');
  const [year, setYear] = useState('2022');
  const [list, setList] = useState([]);

  async function fetchData() {
    const response = await fetch(`https://date.nager.at/api/v3/publicholidays/2022/DE`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return await response.json();
  }

  const dataListHandler = (data) => {
    setCountry(data.country);
    setYear(data.year);
  };

  const listHandler = async () => {
    await setList(await fetchData());
    console.log('list set');
  };


  return (
    <AppContext.Provider value={ {
      setListData: dataListHandler,
      setHolidayList: listHandler,
      country: country,
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
