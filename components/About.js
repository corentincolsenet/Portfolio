import React from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

const About = () => {
    const { t } = useTranslation()
    const description = t("Actuellement en 5ème année à Epitech, je suis à la recherche d'un CDI ou CDD débutant en mars 2023 dans le cadre de mon stage de fin d'étude. N'hésitez surtout pas à me contacter via mon formulaire de contact si mon profil vous plaît!")

    return (
        <section className='flex flex-col space-y-4 md:h-screen justify-center items-center px-8 max-w-md mx-auto py-4 sm:max-w-2xl md:space-y-0 md:flex-row-reverse md:justify-between md:max-w-6xl md:pt-10 md:px-10 xl:px-6'>
            {/* Mon Image */}
            <div className='flex justify-center items-center'>
                <motion.div 
                    whileInView={{ opacity: [0, 1], y: [30, 0] }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    className='relative h-48 w-48 lg:h-56 lg:w-56 rounded-full gradient p-2'
                >
                    <div 
                        className='relative w-full h-full rounded-full bg-white dark:bg-gray-900'>
                        <Image
                            src={'/images/corentin.png'}
                            layout="fill"
                            objectFit="cover"
                            className='rounded-full'
                            alt={t("image de corentin")}
                            loading='lazy'
                        />
                    </div>
                </motion.div>
            </div>
            {/* Titre et brief résumé */}
            <motion.div 
                className='relative flex flex-col space-y-6 w-full xl:space-y-8 text-light-content dark:text-dark-content'
                whileInView={{ opacity: [0, 1], y: [30, 0] }}
                transition={{ duration: 0.5, type: 'tween' }}
            >
                <div className='relative flex justify-start'>
                    <p className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
                        {t("Bonjour!")}
                    </p>
                </div>
                <div className='flex flex-col space-y-1 font-medium'>
                    <h1 className='font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl'>{t("Je m'appelle")} <span className='text-gradient'>Corentin</span></h1>
                    <h2 className='font-light text-lg md:text-xl lg:text-2xl xl:text-3xl'>
                        <Typewriter
                            options={{
                                strings: [t("Je suis un développeur web fullstack!"), t("Je suis un étudiant!"), t("Je suis un freelancer!"), t("Je suis un amoureux du ski!")],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                </div>
                <p className='relative w-full md:w-2/3 text-justify'>
                    {description}
                </p>
                <div className='relative flex justify-between sm:justify-start space-x-4'>
                    <motion.a
                        initial={{ scale: 1, opacity: 0}}
                        whileHover={{ scale: 1.05 }}
                        whileInView={{ opacity: 1 }}
                        href='/files/cv-corentin-colsenet.pdf'
                        className='btn-primary w-1/2 sm:w-auto'
                        download
                    >
                        <p className='text-center break-words'>{t("Télécharger mon CV")}</p>
                    </motion.a>

                    <motion.a
                        initial={{ scale: 1, opacity: 0}}
                        whileHover={{ scale: 1.05 }}
                        whileInView={{ opacity: 1 }}
                        href='https://github.com/corentincolsenet'
                        className='flex space-x-2 justify-center items-center px-4 py-1 text-base md:text-lg xl:text-xl rounded-lg focus:outline-none bg-light-content dark:bg-white w-1/2 sm:w-auto'
                    >
                        <p className='text-white dark:text-light-content text-center'>
                            {t("Voir mon github")}
                        </p>
                        {/* Gihub icon */}
                        <div 
                            className='relative hidden sm:block text-white dark:text-light-content h-4 w-4 fill-current'
                            href="https://github.com/corentincolsenet"
                            target='_blank'
                            rel="noreferrer"
                            title="Github"
                        >
                            <svg viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </div>
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}

export default About