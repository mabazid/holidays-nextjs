import HolidayList from '../components/HolidayList';


const Holidays = (props) => {

  return (<HolidayList list={ props }/>);
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [{
      params: {
        holidayPage: '2022-DE',
      },
    }],
  };
}

export async function getStaticProps(context) {

  const data = context.params.holidayPage.split('-');

  const response = await fetch(`https://date.nager.at/api/v3/publicholidays/${ data[0] }/${ data[1] }`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return {
    props: {
      response: await response.json(),
    },
  };
}

export default Holidays;
