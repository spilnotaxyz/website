import Head from 'next/head'
import { AppProps } from 'next/app'
import { Container, ThemeProvider, useTheme } from '@mui/system'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme, createEmotionCache } from '@lib'
import { PropsWithChildren } from 'react'
import { Inter_Tight } from '@next/font/google'
import { Footer, Header } from '@views'
import { Divider, Text, TextProps } from '@ui'
import { Box, BoxProps } from '@mui/system'
import { MDXProvider } from '@mdx-js/react'

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

type CutTextProps = Omit<TextProps, 'variant'>
const components = {
  h1: (props: CutTextProps) => <Text mt={3} variant="h1" {...props} />,
  h2: (props: CutTextProps) => (
    <Text mt={5} variant="h3" component="h2" {...props} />
  ),
  p: (props: CutTextProps) => <Text variant="body" {...props} />,
  pre: (props: CutTextProps) => <Text variant="body" {...props} />,
  a: (props: Omit<BoxProps, 'ref'>) => (
    <Box component="a" color="inherit" {...props} />
  ),
  li: (props: CutTextProps) => (
    <Text variant="smaller" component="li" {...props} />
  )
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <MDXProvider components={components}>
            <ComponentWrapper>
              <Container className={inter.className} maxWidth="lg">
                <Header py={2.5} />
                <Divider mb={4.5} />
                <Component {...pageProps} />
                <Divider mt={10} />
                <Footer mb={1} py={3.75} />
              </Container>
            </ComponentWrapper>
          </MDXProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
