import { FormControl, MenuItem, Paper, Select } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useContext, useState } from 'react';
import AppContext from '../store/AppContext';


const countryList = [
  { name: 'Germany', code: 'de' },
  { name: 'Italy', code: 'it' },
  { name: 'Netherlands', code: 'nl' },
  { name: 'France', code: 'fr' },
  { name: 'United States', code: 'us' },
  { name: 'Belgium', code: 'bl' },
];

const years = [
  2024,
  2023,
  2022,
  2021,
  2020,
  2019,
  2018,
];


const HolidayForm = () => {
  const router = useRouter();
  const state = useContext(AppContext);
  const [year, setYear] = useState(2022);
  const [country, setCountry] = useState({ name: 'Germany', code: 'de' });

  const handleYear = (event) => {
    setYear(event.target.value);
  };

  const handleCountry = (event) => {
    console.log(event.target.value);
    setCountry({ name: event.target.key, code: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await state.setHolidayList(year, country.code);
    await router.push('/holidays');
  };

  return (
    <Paper sx={ {
      width: '20%',
      pl: '25px',
      pr: '25px',
      ml: '40%',
      mt: '10%',
    } }
    >
      <form onSubmit={ submitHandler }>
        <FormControl sx={ { p: 2, mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' } }>

          <Select
            value={ country.code }
            label="Year"
            onChange={ handleCountry }
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            { countryList.map((country) => (
              <MenuItem
                key={ country.name }
                value={ country.code }
              >
                { country.name }
              </MenuItem>
            )) }
          </Select>


          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ year }
            label="Country"
            onChange={ handleYear }
          >
            { years.map((year) => (
              <MenuItem
                key={ year }
                value={ year }
              >
                { year }
              </MenuItem>
            )) }
          </Select>

          <Button type="submit">Submit</Button>

        </FormControl>
      </form>
    </Paper>
  );
};

// export async function getStaticProps() {
export async function fetchData() {
  const response = await fetch(`https://date.nager.at/api/v3/publicholidays/2022/DE`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

export default HolidayForm;
