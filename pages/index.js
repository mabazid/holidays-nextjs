import { Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

const HomePage = () => {
  const [holidaysList, setHolidaysList] = useState([]);

  async function fetchHolidays() {
    const response = await fetch(`https://date.nager.at/api/v3/publicholidays/2022/DE`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setHolidaysList(await response.json());
  }

  return <h1>Home Page!
    <Button onClick={ fetchHolidays }>
      <Link
        href="/holidays"
      >Holidays</Link>
    </Button>
  </h1>;
};

export default HomePage;
