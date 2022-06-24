import { appWithTranslation } from 'next-i18next'
import { SWRConfig } from 'swr'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'
import { NextSeo } from 'next-seo'

import 'react-toastify/dist/ReactToastify.css'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <ThemeProvider attribute="class" enableSystem={false}>
            <NextSeo
                title="Corentin Colsenet - Portfolio"
                description="Bienvenue sur mon site portfolio! Vous pourrez y trouver des informations concernant mon parcours professionnel et scolaire."
            />

            <SWRConfig
                value={{
                    fetcher: fetch,
                    onError: (err) => {
                        console.error(err)
                    },
                }}
            >
                <Component {...pageProps} />
            </SWRConfig>

            <ToastContainer 
                autoClose={3500}
                position='top-center'
            />
        </ThemeProvider>
    )
}

export default appWithTranslation(MyApp)
