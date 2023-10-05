import classses from "./contactForm.module.css"
import React, { useEffect, useMemo, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import { Container } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiCall from "../../utils/apiCall"
import AOS from 'aos';
import 'aos/dist/aos.css';
const ContactForm = (props) => {
    const defaultMessage = props?.defaultMessage;
    const webUrl = props?.webUrl;
    const redirectOnCompareTable = props?.redirectOnCompareTable;
    const initialValues = useMemo(() => {
        return {
            fullname: "",
            phone: "",
            email: "",
            message: defaultMessage || ""
        }
    }, [])
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (values) => {
        let errors = {};
        if (!values.fullname) {
            errors.fullname = "Full name is required";
        } else if (values.fullname.length > 30) {
            errors.fullname = "Please enter valid name";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required";
        } else if (!validator.isMobilePhone(values.phone)) {
            errors.phone = "Please enter valid phone number";
        }

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!validator.isEmail(values.email)) {
            errors.email = "Please enter valid email address";
        }
        if (!values.message) {
            errors.message = "Please fill this field"
        }
        return errors;
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmitting(true)
    }

    useEffect(() => {
        const PostData = async () => {
            try {
                const result = await apiCall("add_contact_enquiry.php", "post", formValues)
                if (result.data.status) {
                    webUrl && defaultMessage ? window.open(webUrl, '_blank') : defaultMessage && redirectOnCompareTable ? redirectOnCompareTable() : toast.success(result.data.message, { position: "top-center", });

                } else {
                    toast.error(result.data.message)
                }
            } catch (e) {
                toast.error(e, { position: "top-center", });
            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            PostData()
            setFormValues(initialValues)
            setIsSubmitting(false)
        }
    }, [formErrors, isSubmitting, initialValues, formValues])
    useEffect(() => {
        AOS.init();
    })
    return (
        <>
            <Container center>
                <div className=' '>
                    <form onSubmit={handleSubmit} noValidate data-aos="fade-right" >
                        <h3 className='Form_main_heading'>{defaultMessage ? "Please fill the form" : "Connect with us"}</h3>
                        <div className="input-field">
                            <input
                                type="text "
                                placeholder='Enter Your Full Name'
                                id='fullname'
                                name='fullname'
                                value={formValues.fullname}
                                onChange={handleChange}
                                className={formErrors.fullname && "input-error"}
                            />
                            {formErrors.fullname && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.fullname}</small>
                                </div>
                            )}
                        </div>
                        <div className="input-field">

                            <input type="number" id='phone'
                                placeholder='Enter Your Phone Number'
                                name='phone'
                                value={formValues.phone}
                                onChange={handleChange}
                                className={formErrors.phone && "input-error"}
                            />
                            {formErrors.phone && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.phone}</small>
                                </div>
                            )}
                        </div>
                        <div className="input-field">

                            <input type="email" id='email'
                                placeholder='Enter Your Email'
                                name='email'
                                value={formValues.email}
                                onChange={handleChange}
                                className={formErrors.email && "input-error"}
                            />
                            {formErrors.email && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.email}</small>
                                </div>
                            )}
                        </div>
                        <div className="input-field text-area">

                            <textarea id='message'
                                placeholder='Enter your message'
                                name='message'
                                value={formValues.message}
                                disabled={defaultMessage}
                                onChange={handleChange}
                                className={formErrors.message && "input-error"}
                            />
                            {formErrors.message && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.message}</small>
                                </div>
                            )}
                        </div>


                        <div className="input-field">
                            <button type="submit" className='btn btn-outline-success  '>{defaultMessage ? "Submit" : "Send Message"} </button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default ContactForm