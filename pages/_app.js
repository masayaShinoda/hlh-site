import { useEffect } from 'react'
import '../styles/reset.css'
import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
