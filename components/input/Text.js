import React from 'react'
import { Field, useField } from 'formik'
import propTypes from 'prop-types'

const TextInput = ({ className, label, id, type, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <div className={`flex flex-col`}>
            {label &&
                <label className="block uppercase tracking-wide text-light-content dark:text-dark-content text-xs font-bold mb-2" htmlFor={id}>
                    {label}
                </label>
            }

            <Field className={className} {...field} id={id} {...props} />

            {meta.touched && meta.error ? (
                <p className="relative -mb-5 text-sm text-center font-light text-red-500">{meta.error}</p>
            ) : null}
        </div>
    )
}

export default TextInput

TextInput.propTypes= {
    className: propTypes.string,
    label: propTypes.string,
    id: propTypes.string,
    type: propTypes.string
}