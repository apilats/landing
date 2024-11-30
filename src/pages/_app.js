import "bootstrap/dist/css/bootstrap.css";
import "../styles/style.css";
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
