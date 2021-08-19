
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Context from '../components/Context/Context';
import Head from 'next/head'
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'
import Header from '../components/Header/Header'
import theme from '../theme'
import { useState } from 'react';


const A11y = ({ Component, pageProps }: AppProps) => {
  
  const [currentPoints, setPoints] = useState<number>(0);
  const [submittedLevel, setLevel] = useState<Map<number, number>>(new Map());

  const addPoints: (num: number) => void = (num: number) => {

    console.log('new VALUE: ' + (currentPoints + num));

    setPoints(currentPoints + num);
  }

  const addSubmittedLevel: (level: number, points: number) => void = (level: number, points: number) => {
    setLevel(map => new Map(map.set(level, points)));
  }

  const userSettings = {
    points: currentPoints,
    submittedLevel: submittedLevel,
    addPoints: addPoints,
    addSubmittedLevel: addSubmittedLevel
  }
  
  return (
    <Context.Provider value={userSettings}>
      <ThemeProvider theme={theme}>
        <Head>
          <link href="../components/GlobalStyles/fonts/fonts.css" rel="stylesheet"/>
        </Head>
        <GlobalStyles />
        <div className="circles">
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </Context.Provider>)
}
export default A11y
