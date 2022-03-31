import DenseAppBar from '../components/layout/header';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <DenseAppBar>
      <Component { ...pageProps } />
    </DenseAppBar>
  );
}

export default MyApp;
