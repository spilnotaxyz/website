import Head from 'next/head'
import { AppProps } from 'next/app'
import { Container, ThemeProvider, useTheme } from '@mui/system'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme, createEmotionCache } from '@lib'
import { PropsWithChildren } from 'react'
import { Inter_Tight } from '@next/font/google'
import { Footer, Header } from '@views'
import { Divider } from '@ui'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const ComponentWrapper = ({ children }: PropsWithChildren) => {
  const theme = useTheme()
  return (
    <>
      {/* @ts-ignore */}
      <style global jsx>{`
        body {
          background: ${theme.palette.background.default};
          font-family: 'Inter Tight', sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        hr {
          margin-block-start: 0;
          margin-block-end: 0;
          margin-inline-start: 0;
          margin-inline-end: 0;
          padding-block-start: 0;
          padding-block-end: 0;
          padding-inline-start: 0;
          padding-inline-end: 0;
        }
      `}</style>
      {children}
    </>
  )
}

export const inter = Inter_Tight({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif']
})

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <ComponentWrapper>
            <Container maxWidth="lg">
              <Header py={2.5} />
              <Divider mb={4.5} />
              <Component {...pageProps} />
              <Divider mt={10} />
              <Footer mb={1} py={3.75} />
            </Container>
          </ComponentWrapper>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
