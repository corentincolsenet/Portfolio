import React from 'react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { LinkIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'

import GithubLink from '@/components/socialLinks/GithubLink'

const Projects = () => {
    const { t } = useTranslation()
    const projectsList = [
        {
            title: t("Site porfolio"), 
            description: t("J'ai créé ce site portfolio afin de mettre en valeur les compétences techniques acquises lors de mes anciennes expériences professionnelles et personnelles."),
            techStack: 'NextJS, TailwindCSS, Framer Motion',
            img: '/images/site-portfolio.png',
            gitHub: 'https://github.com/corentincolsenet/Portfolio',
            alt: t("aperçu de l'image du site portfolio")
        },
        {
            title: t("Movies app avec Redux"),
            description: t("Une movie app permettant d'afficher les films par 4, 8 ou 12 et par catégorie. L'application contient aussi un moyen de changer de page si il y'a plus de films que d'élément à afficher."),
            techStack: 'ReactJS, TailwindCSS, Redux',
            img: '/images/movies-app.png',
            gitHub: 'https://github.com/corentincolsenet/movies-app-redux',
            livePreview: 'https://movies-app-redux-alpha.vercel.app',
            alt: t("aperçu de l'image de la movies app")
        },
        ,
        {
            title: t("Gantt chart"),
            description: t("Affichage de tâches avec la possibilité de changer la date, la bar de progrès et la vue qui par défaut est le jour."),
            techStack: 'NextJS, Styled-components, Gantt-task-react',
            img: '/images/gantt.png',
            gitHub: 'https://github.com/corentincolsenet/gantt-chart',
            alt: t("aperçu de l'image du Gantt chart")
        },
        ,
        {
            title: t("Site vitrine de Green"),
            description: t("Le site vitrine de Green a vu le jour lors de la création de l'EIP (Epitech Inovative Project). Si vous voulez en savoir plus sur Green, n'hésitez pas à aller voir le site vitrine."),
            techStack: 'NextJS, TailwindCSS, Framer Motion',
            img: '/images/site-green.png',
            livePreview: 'https://discovergreen.org/',
            alt: t("aperçu de l'image du site green")
        },
        {
            title: 'Tic-Tac-Toe',
            description: t("Durant mon année à l'université de Long Beach, j'ai co-réalisé un Tic-Tac-Toe dans un projet qui consistait à utilisé la librairie graphique Pygame."),
            techStack: 'Python, Pygame',
            img: '/images/tic-tac-toe.png',
            gitHub: 'https://github.com/corentincolsenet/IS340',
            alt: t("aperçu de l'image du tic-tac-toe")
        },
    ]

    return (
        <section id='projects' className='w-full h-full bg-cyan dark:bg-gray-800 py-4 px-8 md:px-10 xl:px-6'>
            <div className='flex flex-col space-y-8 max-w-md md:max-w-6xl items-center justify-center w-full mx-auto'>
                <h1 className='text-light-content dark:text-dark-content text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                    {t("Mes Projets")}
                </h1>
                <ul className='flex flex-wrap gap-y-6 gap-x-12 justify-center items-center'>
                    {projectsList.map(project => (
                        <motion.li 
                            whileInView={{ opacity: [0, 1], y: [30, 0] }}
                            transition={{ duration: 0.5, type: 'tween' }}
                            key={project.title}
                            title={project.title}
                            className='flex flex-col h-96 w-64 rounded-3xl shadow-lg border-gray-700 bg-white'
                        >
                            <div className='relative h-full w-full border-b-[0.5px] border-gray-700'>
                                <Image 
                                    src={project.img}
                                    layout="fill"
                                    className='rounded-t-3xl blur-[1px]'
                                    objectFit="cover"
                                    alt={project.alt}
                                    loading='lazy'
                                />
                            </div>
                            <div className='relative flex flex-col justify-between h-full w-full px-4 py-2 dark:text-gray-900'>
                                <div className='flex flex-col space-y-3'>
                                    <h3 className='text-base font-bold text-center'>{project.title}</h3>
                                    <p className='text-xs text-justify font-light'>{project.description}</p>
                                </div>
                                <div className='flex flex-col space-y-3'>
                                    <p className='text-xs font-medium'>Tech Stack: <span className='font-light text-end'>{project.techStack}</span></p>
                                    <div className='flex justify-center items-center space-x-4'>
                                        {project?.livePreview &&
                                            <div className='flex space-x-1 items-center'>
                                                <LinkIcon className='h-4 w-4 text-gray-900' />
                                                <a 
                                                    className='text-medium text-xs underline cursor-pointer'
                                                    href={project.livePreview}
                                                    target='_blank'
                                                    rel="noreferrer"
                                                >
                                                    {t("Aperçu en direct")}
                                                </a>
                                            </div>
                                        }
                                        {project?.gitHub &&
                                            <div className='flex space-x-1 items-center'>
                                                <GithubLink height={4} width={4} className="text-gray-900" />
                                                <a 
                                                    className='text-medium text-xs underline cursor-pointer'
                                                    href={project.gitHub}
                                                    target='_blank'
                                                    rel="noreferrer"
                                                >
                                                    {t("Voir le code")}
                                                </a>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </div>

        </section>
    )
}

export default Projects