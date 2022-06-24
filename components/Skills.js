import React from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { motion } from 'framer-motion'

const TechStack = () => {
    const { t } = useTranslation()
    const techStacksList = [
        { img: '/images/html.svg', alt: "icon html", title: 'HTML5' },
        { img: '/images/css.svg', alt: "icon css", title: 'CSS3' },
        { img: '/images/js.svg', alt: "icon js", title: 'JavaScript' },
        { img: '/images/react.svg', alt: "icon react.js", title: 'ReactJS' },
        { img: '/images/next.svg', alt: "icon next.js", title: 'NextJS' },
        { img: '/images/tailwindcss.svg', alt: "icon tailwindcss", title: 'TailwindCSS' },
        { img: '/images/git.svg', alt: "icon git", title: 'Git' },
        { img: '/images/github.svg', alt: "icon github", title: 'Github', className: 'text-black rounded-full' },
        { img: '/images/vscode.svg', alt: "icon vscode", title: 'VsCode' },
        { img: '/images/jira.svg', alt: "icon jira", title: 'Jira Software' },
    ]

    return (
        <section id='technicalSkills' className='w-full h-full bg-cyan dark:bg-gray-800 py-4 px-8 md:px-10 xl:px-6'>
            <div className='flex flex-col space-y-8 max-w-md md:max-w-6xl items-center justify-center w-full mx-auto'>
                <div className='flex flex-col space-y-4 text-light-content dark:text-dark-content'>
                    <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                        {t("Mes Compétences Techniques")}
                    </h1>
                    <p className='text-center'>
                        {t("Technologies que j'ai utilisées durant mes expériences professionnelles et personnelles.")}
                    </p>
                </div>
                <motion.ul 
                    whileInView={{ opacity: [0, 1], y: [30, 0] }}
                    transition={{ duration: 0.5, type: 'tween', delayChildren: 0.25 }}
                    className='flex flex-wrap gap-y-6 gap-x-12 justify-center items-center md:px-20'
                >
                    {techStacksList.map(tech => (
                        <li 
                            key={tech.title}
                            title={tech.title}
                            className='h-16 w-16 md:h-24 md:w-24 rounded-full bg-white p-4'
                        >
                            <div className='relative h-full w-full rounded-full'>
                                <Image 
                                    src={tech.img}
                                    layout="fill"
                                    className={tech?.className}
                                    objectFit="cover"
                                    alt={tech.alt}
                                    loading='lazy'
                                />
                            </div>
                        </li>
                    ))}
                </motion.ul>
            </div>
        </section>
    )
}

export default TechStack