import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '@/components/Layout'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Information from '@/components/Information'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const Home = () => {
    return (
        <div className='noSelect bg-white dark:bg-gray-900'>
            <Layout>
                <About />
                <Skills />
                <Information />
                <Projects />
                <Contact />
            </Layout>
        </div>
    )
}

export default Home

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
        },
    }
}