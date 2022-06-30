import type { AppProps } from 'next/app'
import 'styles/Home.scss'

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
