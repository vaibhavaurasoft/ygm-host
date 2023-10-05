import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import axios from "axios";
import { Container } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';

import env from "dotenv";

env.config();
const ChangePassword = (props) => {
    const userDetails = useSelector((state) => state.user.userDetails);
    const { token } = userDetails;
    const initialValues = {
        old_password: "",
        new_password: "",
        token
    }
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validate = (values) => {
        let errors = {};
        if (!values.old_password) {
            errors.old_password = "Password is required";
        } else if (!validator.isStrongPassword(values.old_password)) {
            errors.old_password = "Please enter strong password number";
        }
        if (!values.new_password) {
            errors.new_password = "Password is required";
        } else if (!validator.isStrongPassword(values.new_password)) {
            errors.new_password = "Please enter strong password number";
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
            const dataArray = new FormData();
            dataArray.append("oldPassword", formValues.old_password);
            dataArray.append("newPassword", formValues.new_password);
            dataArray.append("token", formValues.token);

            try {
                const url = `${process.env.NEXT_PUBLIC_API_URL}/update_student_password.php`
                const result = await axios.post(url, dataArray, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                if (result.data.status) {
                    toast.success(result.data.message)
                    setFormValues(initialValues)
                } else {
                    toast.error(result.data.message)
                }
                // props.onCloseModel()
            } catch (error) {
                toast.error(error.message)
            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            PostData();
            setIsSubmitting(false)
        }
    }, [formErrors, isSubmitting, formValues, initialValues, props])
    return (
        <>
            <Container center>
                <div className=' '>
                    <form onSubmit={handleSubmit} noValidate data-aos="fade-right" >
                        {/* <h3 className='Form_main_heading'>Change Password</h3> */}
                        <div className="input-field mb-5">

                            <input type="password" id='old_password'
                                placeholder='Old Password'
                                name='old_password'
                                value={formValues.old_password}
                                onChange={handleChange}
                                className={formErrors.old_password && "input-error"}
                            />
                            {formErrors.old_password && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.old_password}</small>
                                </div>
                            )}
                        </div>
                        <div className="input-field mt-5">

                            <input type="password" id='new_password'
                                placeholder='New Password'
                                name='new_password'
                                value={formValues.new_password}
                                onChange={handleChange}
                                className={formErrors.new_password && "input-error"}
                            />
                            {formErrors.new_password && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.new_password}</small>
                                </div>
                            )}
                        </div>
                        <div className='input-field mt-3'>
                            <button className='btn btn-white btn-animate' type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default ChangePassword