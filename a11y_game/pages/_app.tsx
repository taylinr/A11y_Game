
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Head from 'next/head'
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import Header from '../components/Header/Header'
import theme from '../theme'

function A11y({ Component, pageProps }: AppProps) {
  return(<ThemeProvider theme={theme}>
      <Head>
        <link href="../components/GlobalStyles/fonts/fonts.css" rel="stylesheet"/>
      </Head>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>)
}
export default A11y
