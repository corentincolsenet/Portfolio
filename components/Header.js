import React, { useState, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const { t, i18n } = useTranslation()
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)
    const [showLocalesOnDesktop, setShowLocalesOnDesktop] = useState(false)
    const [showLocalesOnPhone, setShowLocalesOnPhone] = useState(false)
    const [animateHeader, setAnimateHeader] = useState(false)
    const {theme, setTheme} = useTheme()

    const menuItems = [
        { title: t('À propos'), href: '/' },
        { title: t('Compétences techniques'), href: '/#technicalSkills' },
        { title: t('Projets'), href: '/#projects'},
        { title: t('Contact'), href: '/#contact'}
    ]

    const flags = {
        fr: "/images/france.svg",
        en: "/images/united-kingdom.svg",
    }

    useEffect(() => {
        const scrollListener = () => {
            if (window.pageYOffset > 150)
                setAnimateHeader(true)
            else
                setAnimateHeader(false)
        }

        const responsiveListener = () => {
            // 768px pour le responsive coté desktop
            const md = 768
            if (window.innerWidth > md)
                setShowMenu(false)
        }

        window.addEventListener("scroll", scrollListener)
        window.addEventListener("resize", responsiveListener)

        return () => {
            window.removeEventListener("scroll", scrollListener)
            window.removeEventListener("resize", responsiveListener)
        }
    }, [])
    
    return (
        <header className={`${animateHeader && 'shadow-xl sticky top-0 inset-0 bg-white/50 dark:bg-gray-800'} w-full backdrop-filter backdrop-blur-lg z-10 transition-all ease-in-out duration-200`}>
            <div className='max-w-7xl 2xl:max-w-8xl mx-auto'>
                <div className={`flex items-center justify-between py-6 px-8`}>
                    <Link href="/">
                        <a className='text-2xl font-bold text-gradient cursor-pointer'>
                            Corentin°
                        </a>
                    </Link>
                    <nav className='hidden md:block text-light-content dark:text-dark-content'>
                        <div className='flex items-center justify-start'>
                            <ul className='flex animate-li'>
                                {menuItems?.map((item, itemIndex) => (
                                    <li key={itemIndex} className='animate-from-left'>
                                        <Link
                                            href={item?.href}
                                        >
                                            <a className='px-2 md:px-3 lg:px-4 py-3 text-sm'>
                                                {item?.title}
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex space-x-3 items-center justify-center'>
                                <button
                                    type='button'
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                    className='w-6 h-6'
                                >
                                    {theme === 'dark' ?
                                        <SunIcon /> :
                                        <MoonIcon />
                                    }
                                </button>
                                <div className="hidden md:flex items-center">
                                    <a className="relative h-4 w-6 cursor-pointer" onClick={() => setShowLocalesOnDesktop(!showLocalesOnDesktop)}>
                                        <Image
                                            src={flags[i18n.language]}
                                            layout="fill"
                                            objectFit="cover"
                                            alt={t("image du drapeau")}
                                            loading='lazy'
                                        />
                                    </a>

                                    {showLocalesOnDesktop &&
                                        <div className="absolute flex flex-col top-14 space-y-2" role="menu" aria-orientation="vertical" aria-labelledby="select-locale">
                                            {router.locales.filter(l => l !== i18n.language).map(l => (
                                                <Link key={l} href="/" locale={l}>
                                                    <a className="relative h-4 w-6" role="menuitem">
                                                        <Image
                                                            src={flags[l]}
                                                            layout="fill"
                                                            objectFit="cover"
                                                            alt={t("image du drapeau")}
                                                            loading='lazy'
                                                        />
                                                    </a>
                                                </Link>
                                            ))}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </nav>

                    <motion.button
                        animate={showMenu ? { rotate: 90 } : { rotate: 0 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        type='button'
                        onClick={() => setShowMenu(!showMenu)}
                        className='md:hidden w-8 h-8 text-light-content dark:text-dark-content'
                        aria-expanded='false'
                    >
                        {showMenu ?
                            <XIcon /> :
                            <MenuIcon />
                        }
                    </motion.button>
                </div>
                {showMenu &&
                    <div className='flex flex-col items-center justify-center w-full space-y-3 py-3 shadow-xl md:hidden'>
                        <ul className='flex flex-col items-center space-y-3'>
                            {menuItems?.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                    <Link
                                        href={item?.href}
                                    >
                                        <a 
                                            onClick={() => setShowMenu(false)}
                                            className='px-4 w-full text-base leading-[22px] text-light-content dark:text-dark-content'
                                        >
                                            {item?.title}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className='flex space-x-3 items-center justify-center'>
                            <button
                                type='button'
                                onClick={() => {
                                    setTheme(theme === 'dark' ? 'light' : 'dark')
                                    setShowMenu(false)
                                }}
                                className='w-6 h-6 text-light-content dark:text-dark-content'
                            >
                                {theme === 'dark' ?
                                    <SunIcon /> :
                                    <MoonIcon />
                                }
                            </button>
                            <div className="flex md:hidden items-center">
                                <a className="relative h-4 w-6 cursor-pointer" onClick={() => setShowLocalesOnPhone(!showLocalesOnPhone)}>
                                    <Image
                                        src={flags[i18n.language]}
                                        layout="fill"
                                        objectFit="cover"
                                        alt={t("image du drapeau")}
                                        loading='lazy'
                                    />
                                </a>

                                {showLocalesOnPhone &&
                                    <div className="flex ml-4 space-x-2" role="menu" aria-orientation="horizontal" aria-labelledby="select-locale">
                                        {router.locales.filter(l => l !== i18n.language).map(l => (
                                            <Link key={l} href="/" locale={l}>
                                                <a className="relative h-4 w-6" role="menuitem">
                                                    <Image
                                                        src={flags[l]}
                                                        layout="fill"
                                                        objectFit="cover"
                                                        alt={t("image du drapeau")}
                                                        loading='lazy'
                                                    />
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </header>
    )
}

export default Header
