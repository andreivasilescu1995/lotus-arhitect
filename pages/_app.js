import '../styles/globals.css';
import Layout from '../components/Layout';
import CssBaseline from "@mui/material/CssBaseline";
import createEmotionCache from "../config/createEmotionCache";
import theme from '../components/Theme';
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
