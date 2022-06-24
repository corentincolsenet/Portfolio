import React from 'react'
import { useTranslation } from 'next-i18next'

import Work from '@/components/Work'

const Information = () => {
    const { t } = useTranslation()
    const experiences = [
        { jobName: t("Développeur Full Stack"), company: 'Barbablanka', date: t("Avr 2021 - Août 2021"), location: 'Montpellier, France', contract: t("Stage") },
        { jobName: t("Développeur Full Stack"), company: 'MWSC', date: t("Juin 2019 - Déc 2019"), location: 'Montpellier, France', contract: t("Stage") },
    ]

    const education = [
        { degreeName: t("Expert en technologie de l'information"), school: 'Epitech', date: t("Oct 2018 - Août 2023"), location: 'Montpellier & Paris, France', contract: t("Plein temps") },
        { degreeName: t("Étudiant en échange"), school: 'CSULB', date: t("Oct 2021 - Mai 2022"), location: 'Long Beach, California', contract: t("Plein temps") },
    ]

    return (
        <section id='about' className='w-full h-full px-8 pb-4 md:px-10 xl:px-6'>
            <div className='flex flex-col space-y-12 max-w-2xl md:max-w-6xl items-center justify-center w-full mx-auto'>
                <Work title={t("Mes Expériences")} data={experiences} />
                <Work title={t("Mon Parcours")} data={education} />
            </div>
        </section>
    )
}

export default Information