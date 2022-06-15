import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import 'modern-css-reset/dist/reset.min.css'
import '../styles/globals.scss'
import '../styles/variables.scss'
import type { AppPropsWithLayout } from 'next/app'
import { store } from '../store/store'

function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default App
