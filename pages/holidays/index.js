import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';



const Holidays = () => {

  return <Fragment>
    <h1>
      Holidays List!
    </h1>
    <ul>
      <li>
        <Link href="/holidays/holidayID">Christmas</Link>
      </li>
      <li>
        <Link href="/holidays/holidayID">Mothers day</Link>
      </li>
    </ul>
  </Fragment>;
};

export default Holidays;
