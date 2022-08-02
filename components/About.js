import React from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

const About = () => {
    const { t } = useTranslation()

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
                    {t("Actuellement en 5ème année à Epitech, je suis à la recherche d'un CDD ou d'un stage à temps partiel dans le cadre du début de cette nouvelle année. N'hésitez surtout pas à me contacter via mon formulaire de contact si mon profil vous plaît!")}
                </p>
                <div className='relative flex justify-start'>
                    <motion.a
                        initial={{ scale: 1, opacity: 0}}
                        whileHover={{ scale: 1.05 }}
                        whileInView={{ opacity: 1 }}
                        href='/files/cv-corentin-colsenet.pdf'
                        className='btn-primary'
                        download
                    >
                        {t("Télécharger mon CV")}
                    </motion.a>
                </div>
            </motion.div>
        </section>
    )
}

export default About