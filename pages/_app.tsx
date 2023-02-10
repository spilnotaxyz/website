import Head from 'next/head'
import { AppProps } from 'next/app'
import { Container, ThemeProvider, useTheme } from '@mui/system'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme, createEmotionCache } from '@lib'
import { PropsWithChildren } from 'react'
import { Inter_Tight } from '@next/font/google'
import { Footer, Header } from '@views'
import { Text } from '@ui'
import { Box } from '@mui/system'
import { MDXProvider } from '@mdx-js/react'
import { GoogleAnalytics } from 'nextjs-google-analytics'

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
        html {
          scroll-behavior: smooth;
        }
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
  weight: ['400'],
  subsets: ['latin'],
  fallback: ['sans-serif']
})

const components = {
  h1: (props: any) => <Text mt={3} variant="h1" {...props} />,
  h2: (props: any) => <Text mt={5} variant="h3" component="h2" {...props} />,
  p: (props: any) => <Text variant="body" {...props} />,
  pre: (props: any) => <Text variant="body" {...props} />,
  a: (props: any) => <Box component="a" color="inherit" {...props} />,
  li: (props: any) => <Text variant="smaller" component="li" {...props} />
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <>
      <link rel="shortcut icon" href="/favicon.svg" />
      <title>Synergising ideas & communities | spilnota.xyz</title>
      <meta
        name="title"
        content="Synergising ideas & communities | spilnota.xyz"
      />
      <meta
        name="description"
        content="A Growth platform for community-oriented startups, soon..."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://spilnota.xyz/" />
      <meta
        property="og:title"
        content="Synergising ideas & communities | spilnota.xyz"
      />
      {/* <meta
        property="og:image"
        content="https://spilnota.xyz/meta_image.png"
      /> */}
      <meta
        property="og:description"
        content="A Growth platform for community-oriented startups, soon..."
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://spilnota.xyz/" />
      <meta
        property="twitter:title"
        content="Synergising ideas & communities | spilnota.xyz"
      />
      <meta
        property="twitter:description"
        content="A Growth platform for community-oriented startups, soon..."
      />
      {/* <meta
        property="twitter:image"
        content="https://spilnota.xyz/meta_image.png"
      /> */}
      <meta name="twitter:creator" content="@spilnotaxyz" />
      <meta name="twitter:site" content="@spilnotaxyz" />
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <GoogleAnalytics trackPageViews />
          <MDXProvider components={components}>
            <ComponentWrapper>
              <Container className={inter.className} maxWidth="xl">
                <Header py={2.5} />
                <Component {...pageProps} />
                <Footer mb={1} py={3.75} />
              </Container>
            </ComponentWrapper>
          </MDXProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
