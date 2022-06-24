import { useTranslation } from 'next-i18next'
import { HeartIcon } from '@heroicons/react/solid'

import LinkedInLink from '@/components/socialLinks/LinkedInLink'
import GithubLink from '@/components/socialLinks/GithubLink'
import MaltLink from '@/components/socialLinks/MaltLink'

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer>
            <div className='flex flex-col justify-center items-center space-y-6 pt-4 pb-2'>
                <div className='flex space-x-8'>
                    <LinkedInLink height={8} width={8} className="text-light-content dark:text-dark-content" />
                    <GithubLink height={8} width={8} className="text-light-content dark:text-dark-content" />
                    <MaltLink height={8} width={8} className="text-light-content dark:text-dark-content" />
                </div>
                <div className='flex flex-col justify-center items-center text-sm text-light-content dark:text-dark-content'>
                    <p>Copyright © 2022</p>
                    <div className='flex justify-center items-center space-x-1 px-4'>
                        <p>{t("Made with")}</p>
                        <HeartIcon className='h-5 w-5' />
                        <p>{t("by")}</p>
                        <span className='underline'><strong>Corentin Colsenet</strong></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer