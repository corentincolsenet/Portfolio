import { useEffect, useState } from 'react'
import { ArrowSmUpIcon } from '@heroicons/react/solid'
import { classNames } from '@/lib/classNames'

export const ScrollToTop = () => {
    const [isVisible, setVisible] = useState(false)

    const toggleVisibilty = () => {
        if (window.pageYOffset > 140)
            setVisible(true)
        else
            setVisible(false)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibilty)

        return () => window.removeEventListener('scroll', toggleVisibilty)
    }, [])

    return (
        <div className="fixed bottom-6 right-6">
            <button
                type="button"
                className={classNames(isVisible ? 'opacity-100' : 'opacity-0', 'inline-flex items-center p-3 rounded-xl shadow-xl bg-gray-900 dark:bg-white transition-opacity duration-300')}
                onClick={scrollToTop}
            >
                <ArrowSmUpIcon className="h-6 w-6 text-white dark:text-gray-900" aria-hidden="true" />
            </button>
        </div>
    )
}