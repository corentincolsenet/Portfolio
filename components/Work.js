import React from 'react'
import { LocationMarkerIcon, CalendarIcon, OfficeBuildingIcon } from '@heroicons/react/outline'
import propTypes from 'prop-types'
import { motion } from 'framer-motion'

const Work = ({ title, data }) => {
    return (
        <div className='flex flex-col space-y-8 text-light-content dark:text-dark-content w-full'>
            <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                {title}
            </h1>
            <ul className='flex flex-col space-y-4 items-center w-full md:justify-center md:px-16'>
                {data.map((element, elementIndex) => (
                    <motion.li
                        key={elementIndex}
                        whileInView={{ opacity: [0, 1], y: [30, 0] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='relative flex justify-between border-b-2 border-gray-200 sm:px-3 w-full md:h-16'
                    >
                        <div className='flex flex-col justify-between items-start space-y-4 w-3/5 md:space-y-0'>
                            <h2 className='flex w-full'>{element?.jobName || element?.degreeName}</h2>
                            <div className='flex flex-col text-sm md:items-center md:flex-row md:space-y-0 md:space-x-1 md:w-80 md:justify-between'>
                                <div className='flex space-x-1 items-center'>
                                    <OfficeBuildingIcon className='h-4 w-4' />
                                    <h3>{element?.company || element?.school}</h3>
                                </div>
                                <div className='flex space-x-1 items-center'>
                                    <LocationMarkerIcon className='h-4 w-4 text-red-600' />
                                    <h3>{element.location}</h3>
                                </div>
                                <div className='flex space-x-1 items-center sm:hidden'>
                                <CalendarIcon className='h-4 w-4' />
                                <p>{element.date}</p>
                            </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-end sm:justify-between'>
                            <p className='flex justify-end bg-green-super-light px-4 py-1 rounded-xl text-xs text-green-900 font-semibold'>
                                {element.contract}
                            </p>
                            <div className='hidden sm:flex text-sm space-x-1 items-center'>
                                <CalendarIcon className='h-4 w-4' />
                                <p>{element.date}</p>
                            </div>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}

export default Work

Work.propTypes = {
    title: propTypes.string.isRequired,
    data: propTypes.array.isRequired
}