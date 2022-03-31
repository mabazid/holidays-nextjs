import { FormControl, MenuItem, Paper, Select } from '@mui/material';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useContext, useState } from 'react';
import AppContext from '../store/AppContext';
import Countries from './options/countries';


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
  const [country, setCountry] = useState('Germany');
  const [code, setCode] = useState('DE');

  const handleYear = (event) => {
    setYear(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
    setCode(Countries.find((e) => e.value === event.target.value).key);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await state.setHolidayList(year, code);
    await router.push('/holidays');
  };

  return (
    <Paper sx={ {
      width: '20%',
      minWidth: '420px',
      pl: '25px',
      pr: '25px',
      ml: '35%',
      mt: '10%',
      '@media(minWidth: 780px)' : {
        width: '80%'
      }
    } }
    >
      <form onSubmit={ submitHandler }>
        <FormControl sx={ { p: 2, mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
          <Select
            value={ country }
            label="Year"
            onChange={ handleCountry }
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            { Countries.map((country) => (
              <MenuItem
                value={ country.value }

              >
                { country.value }
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

export default HolidayForm;
