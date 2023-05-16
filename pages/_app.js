import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet";


const GlobalStyles = createGlobalStyle`
  body{
    background-color: #fff;
    padding: 0 0 20px 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;


export default function App({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" />
      </Helmet>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} /> 
      </CartContextProvider> 
    </>
  );
}
