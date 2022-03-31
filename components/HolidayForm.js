import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useContext, useState } from 'react';
import AppContext from '../store/AppContext';


const names = [
  'Germany',
  'Italy',
  'Netherlands',
  'United States',
  'Belgium',
  'Luxembourg',
  'Denmark',
  'Sweden',
  'Switzerland',
  'Czech Republic',
  'Poland',
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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const HolidayForm = () => {
  const router = useRouter();
  const state = useContext(AppContext);
  const theme = useTheme();
  const [year, setYear] = useState('germany');
  const [country, setCountry] = useState(2022);

  const handleYear = (event) => {
    setYear(event.target.value);
  };

  const handleCountry = (event) => {
    setCountry(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = {
      year: year,
      country: country,
    };

    state.setListData(data);
    await router.push('/holidays');

    await state.setHolidayList();
  };

  return (
    <form onSubmit={ submitHandler }>
      <FormControl sx={ { m: 1, width: 300, mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' } }>
        <Select
          value={ year }
          onChange={ handleCountry }
          input={ <OutlinedInput/> }
          inputProps={ { 'aria-label': 'Without label' } }
        >
          { names.map((name) => (
            <MenuItem
              key={ name }
              value={ name }
            >
              { name }
            </MenuItem>
          )) }
        </Select>
        <Select
          value={ country }
          onChange={ handleYear }
          input={ <OutlinedInput/> }
          inputProps={ { 'aria-label': 'Without label' } }
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
