import React from 'react'
import { useTranslation } from 'next-i18next'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import TextInput from '@/components/input/Text'

const Contact = () => {
    const { t } = useTranslation()
    const emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

    const contactSchema = Yup.object({
        firstname: Yup.string()
            .required(t("requis")),
        lastname: Yup.string()
            .required(t("requis")),
        email: Yup.string()
            .matches(emailRegex, t("Adresse email invalide"))
            .required(t("requis")),
        message: Yup.string()
            .required(t("requis"))
    })

    const handleSubmit = (values) => {
        const { firstname, lastname, email, message } = values

        try {
            const res = new Promise((resolve) =>
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ firstname, lastname, email, message })
                }).then((response) => resolve(response.json()))
            )

            toast.promise(res, {
                pending: t("En cours d'envoi"),
                success: t("Ton email a été envoyé avec succès 🎉 !"),
                error: t("Un problème est survenu")
            }, {
                className: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
            })
        } catch (error) {
            return error
        }
    }

    return (
        <section id='contact' className='w-full h-full px-8 py-4 md:px-10 xl:px-6'>
            <div className='flex flex-col space-y-6 max-w-2xl md:max-w-6xl items-center justify-center w-full mx-auto'>
                <h1 className='text-center font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-light-content dark:text-dark-content'>
                    {t("Me contacter")}
                </h1>
                <Formik
                initialValues= {{
                    firstname: '',
                    lastname: '',
                    email: '',
                    message: ''
                }}
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={contactSchema}
                onSubmit= {(values, { resetForm }) => {
                    try {
                        handleSubmit(values)
                        resetForm()
                    } catch (error) {
                        console.log("Error while submit:", error)
                    }
                }}
            >
                <Form className="relative flex flex-col space-y-3 md:space-y-6 w-full">
                    <div className="flex flex-row justify-center space-x-6 w-full">
                        <TextInput 
                            className="input"
                            label={t("Prénom")}
                            id="grid-first-firstname"
                            name="firstname"
                            type="text"
                            placeholder={t("Prénom")}
                        />
                        <TextInput 
                            className="input"
                            label={t("Nom")}
                            id="grid-first-lastname"
                            name="lastname"
                            type="text"
                            placeholder={t("Nom")}
                        />
                    </div>
                    <TextInput 
                        className="input"
                        label={t("email")}
                        id="grid-password"
                        name="email"
                        type="email"
                        placeholder={t("contact@exemple.com")}
                    />
                    <TextInput 
                        className="self-start no-resize input h-52 md:h-32"
                        label={t("message")}
                        id="grid-message"
                        name="message"
                        type="text"
                        as="textarea"
                        placeholder={t("Entrer le texte ici")}
                    />
                    <div className="flex items-center justify-end">
                        <div className="flex justify-end w-1/3">
                            <motion.button 
                                initial={{ scale: 1, opacity: 0}}
                                whileHover={{ scale: 1.05 }}
                                whileInView={{ opacity: 1 }}
                                className="btn-primary"
                                type="submit"
                            >
                                {t("Envoyer")}
                            </motion.button>
                        </div>
                    </div>
                </Form>
            </Formik>
            </div>
        </section>
    )
}

export default Contact