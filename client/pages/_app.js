import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'mobx-react'
import { useStore } from '../components/store/rootStore'

function MyApp({ 
  Component,
  pageProps: { session, ...pageProps },
}) {
    const store = useStore(pageProps.initialState)
    return(

        <SessionProvider session={pageProps.session}>
            <Provider store={store}>
                <ThemeProvider attribute="class">
                    <Component {...pageProps} />
                </ThemeProvider>
            </Provider>
        </SessionProvider>

    );
}

export default MyApp
