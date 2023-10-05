import React, { useEffect, useRef, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import validator from "validator";
import axios from "axios";
import { Container } from "react-bootstrap";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';

import { setItem } from '../../utils/utilsFunctions';
import { setUserDetails } from '../../redux/slices/userSlice';
const UpdateDetails = (props) => {
    const dispatch = useDispatch();
    const [file, setFile] = useState("");
    const [fileError, setFileError] = useState("")
    const refFile = useRef()
    const userDetails = useSelector((state) => state.user.userDetails);
    const initialValues = {
        student_name : userDetails?.student_name,
        phone : userDetails?.phone,
        token : userDetails?.token
    }


    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const validate = (values) => {
        let errors = {};
        if (!values.student_name) {
            errors.student_name = "Full name is required";
        } else if (values.student_name.length > 30) {
            errors.student_name = "Please enter valid name";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required";
        } else if (!validator.isMobilePhone(values.phone)) {
            errors.phone = "Please enter valid phone number";
        }
        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmitA = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmitting(true)
    }
    useEffect(() => {
        const PostData = async () => {
            const dataArray = new FormData();
            dataArray.append("student_name", formValues.student_name);
            dataArray.append("student_phone", formValues.phone);
            dataArray.append("profile_pic", file);
            dataArray.append("token", formValues.token);
           
            try {
                const url = `${process.env.NEXT_PUBLIC_API_URL}/update_student_details.php`;
                const result = await axios.post(url, dataArray, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                if (result?.data?.success && result?. data?.user) {
                    const { student_name, phone,token  } = result.data.user
                    setItem("GYC_login_user_data", JSON.stringify(result.data.user));
                    dispatch(setUserDetails(result.data.user));
                    toast.success(result.data.message);
                    setFormValues({
                        student_name,
                        phone:phone,
                        token
                    })
                } else toast.error(result.data.message);
            } catch (error) {
                toast.error(error.message)
            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmitting && !fileError) {
            PostData();
            refFile.current.value = ""
            setIsSubmitting(false)
        }
    }, [formErrors, isSubmitting, formValues, initialValues, fileError, file])
    return (
        <>
            <Container center>
                <div className=' '>
                    <form onSubmit={handleSubmitA} noValidate data-aos="fade-right" >
                        <div className=' mx-auto'><div className="input-field ">
                            <input
                                type="text "
                                placeholder='Enter Your Full Name'
                                id='student_name'
                                name='student_name'
                                value={formValues.student_name}
                                onChange={handleChange}
                                className={formErrors.student_name && "input-error"}
                            />
                            {formErrors.student_name && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.student_name}</small>
                                </div>
                            )}
                        </div></div>
                        <div className=' mx-auto'> <div className="input-field">

                            <input type="number" id='student_phone'
                                placeholder='Enter Your Phone Number'
                                name='phone'
                                value={formValues.phone}
                                onChange={handleChange}
                                className={formErrors.phone && "t-error"}
                            />
                            {formErrors.phone && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.phone}</small>
                                </div>
                            )}
                        </div></div>
                        <div className=' mx-auto'><div className="input-field PicFile">
                            <lable htmlFor="file" className="me-auto ps-1 upload">Upload Profile Pic here</lable>
                            <input type="file" id='file'
                                ref={refFile}
                                style={{ paddingBottom: "30px"}}
                                accept=".doc,.jpeg,.JPEG,.JPG,.png,.PNG,.pdf,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                placeholder='Upload your Profile Pic'
                                name='file'
                                onChange={handleFile}
                                className={fileError && "input-error"}
                            />
                            {fileError && (
                                <div className='w-100' >
                                    <small className='error'>{fileError}</small>
                                </div>
                            )}
                        </div></div>
                        <div className='input-field pt-5'>
                            <button className='btn btn-white btn-animate' onClick={handleSubmitA} >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default UpdateDetails