import { useRouter } from 'next/router';

const Details = () => {
  const router = useRouter();

  console.log(router.query.holidayID);

  return <h1>details...</h1>;
};

export default Details;
