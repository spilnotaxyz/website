import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider, useTheme } from '@mui/system'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { theme, createEmotionCache } from '@lib'
import { PropsWithChildren } from 'react'
import { Inter_Tight } from '@next/font/google'

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
            <Component {...pageProps} />
          </ComponentWrapper>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
