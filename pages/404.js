import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

const Custom404 = () => {
    const { t } = useTranslation('common')
    
    return (
        <div className="flex flex-col space-y-4 justify-center items-center h-screen bg-white dark:bg-gray-900 text-light-content dark:text-dark-content px-8">
            <p className="text-4xl font-aleo font-bold">Uh Oh!</p>
            <h2 className="text-xl sm:text-4xl text-center font-brandon">{t("La page que vous recherchez n'existe pas")}</h2>
            <p className="text-lg font-brandon font-light text-justify sm:text-center">
                {t("Vous avez peut-être tapé une mauvaise adresse ou la page a été déplacée. En attendant, réessayez ou ")}
                <Link href="/">
                    <a className="text-green-500 hover:underline">
                        {t("retournez à la page d'accueil")}
                    </a>
                </Link>
                .
            </p>
            <div className="relative h-52 w-80 sm:h-96 sm:w-96">
                <Image
                    src={'/images/404.svg'}
                    layout="fill"
                    objectFit="cover"
                    alt={t("image 404")}
                    loading='lazy'
                />
            </div>
        </div>
    )
}

export default Custom404