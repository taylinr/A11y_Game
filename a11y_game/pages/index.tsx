import Head from 'next/head'
import Button from '../components/Button/Button'

export default function Home() {
  return (
    <div >
      <Head>
        <title>A11y Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <div className={'col-12 row center-horizontal'}>
          <div className={'intro_text col-9'}>
            <h1>
              A11y Game
            </h1> 

            <h2>
              This Game is made for Web Developers
            </h2>
            <div>
              <p>
                Since Developers often cannot see, feel or hear the difference of their code-changes we want to help them by visualizing these changes. We are clearly not able and not trying to simulate disabilities, but rather give developers without these disabilities a glimpse of which important impact their decisions in coding accessible websites have.

    It is not a comprehensive tutorial on Website Accessibility but a great start to learn what is most important - keeping accessibility in mind while coding.
              </p>
            </div>
          </div>

          <div className={'col-3'}>
            <Button primary={true} target={"/personas"}>
                Get Started
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.37114e-07 7.5L14.17 7.5L10.59 11.09L12 12.5L18 6.5L12 0.499999L10.59 1.91L14.17 5.5L6.11959e-07 5.5L4.37114e-07 7.5Z" fill="#ffffff"/>
                </svg>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
