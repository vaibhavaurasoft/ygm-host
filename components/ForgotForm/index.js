import React, { useEffect, useMemo, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import axios from "axios";
import { Container } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
const ForgotForm = (props) => {
    const initialValues = useMemo(() => {
        return {
            email: ""
        }
    }, [])
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (values) => {
        let errors = {};
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!validator.isEmail(values.email)) {
            errors.email = "Please enter valid email address";
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
        setIsSubmitting(true);
    }

    useEffect(() => {
        const postData = async () => {
            const dataArray = new FormData();
            dataArray.append("email", formValues.email);
            try {
                const url = `${process.env.NEXT_PUBLIC_API_URL}/student_forgot_password.php`;
                const result = await axios.post(url, dataArray, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                if (result.data.status) {
                    toast.success(result.data.message);
                    if (props?.onCloseModel) props.onCloseModel();
                } else toast.error(result.data.message);
            } catch (error) {
                toast.error(error.message)
            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            postData();
            setFormValues(initialValues)
            setIsSubmitting(false)
        }
    }, [formErrors, isSubmitting, formValues, initialValues])
    return (
        <>
            <Container center>
                <div className=' '>
                    <form onSubmit={handleSubmit} noValidate data-aos="fade-right" >
                        <h3 className='Form_main_heading'>Enter Your Mail</h3>
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
                    </form>
                </div>
            </Container>
        </>
    )
}

export default ForgotForm