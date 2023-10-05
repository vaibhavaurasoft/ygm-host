
import React, { useEffect, useMemo, useRef, useState } from 'react';
// import "../../assets/css/commanForm.css"
import axios from "axios"
import validator from "validator";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import TopBanner from '../../components/TopBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Signup = ({ toggleNew,handleClose,popupClose }) => {
    const router = useRouter()
    const jobData = router.query.id
    const [file, setFile] = useState("");
    const [fileError, setFileError] = useState("")
    const refFile = useRef()
    const initialValues = useMemo(() => {
        return {
            fullname: "",
            phone: "",
            email: "",
            password: "",
        }
    }, [])
    const [formErrors, setFormErrors] = useState({})
    const [formValues, setFormValues] = useState(initialValues)
    const [isSubmitting, setIsSubmitting] = useState(false)
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
        if (!values.password) {
            errors.password = "Password is required";
        }
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

    const handleFile = (e) => {
        setFile(e.target.files[0])
    }

    const validateFile = (file) => {
        if (!file) {
            setFileError('File is required')
        } else {
            setFileError("")
        }
    }
    const handleSubmitA = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        validateFile(file)
        setIsSubmitting(true);
    }


    useEffect(() => {
        const PostData = async () => {
            const dataArray = new FormData();
            dataArray.append("fullname", formValues.fullname);
            dataArray.append("phone", formValues.phone);
            dataArray.append("email", formValues.email);
            dataArray.append("password", formValues.password);
            dataArray.append("file", file);
            try {
                const url = `${process.env.NEXT_PUBLIC_API_URL}/register_student.php`;
                const result = await axios.post(url, dataArray, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (result.data.status) {
                    toast.success(result.data.message);
                    handleClose();
                    popupClose();
                  } else toast.error(result.data.message);
                } catch (error) {
                  toast.error(error.message)
                }
        }
        if (Object.keys(formErrors).length === 0 && isSubmitting && !fileError) {
            PostData();
            setFormValues(initialValues)
            refFile.current.value = ""
            setIsSubmitting(false)
        }
    }, [formErrors, isSubmitting, formValues, initialValues, fileError, file])
    useEffect(() => {
        AOS.init();
    })
    return (
        <>
            <div className="LogIncol LogIn-align-items-center LogIn-flex-col sign-up">
                <div className="LogIn-form-wrapper LogIn-align-items-center">
                    <div className="LogIn-form sign-up">
                        <div className=' mx-auto'><div className="input-field ">
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
                        </div></div>
                        <div className=' mx-auto'> <div className="input-field ">

                            <input type="number" id='phone'
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
                        <div className=' mx-auto'><div className="input-field">

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
                        </div></div>
                        <div className=' mx-auto'><div className="input-field">
                            <input type="password" id='password'
                                placeholder='Enter Your Password'
                                name='password'
                                value={formValues.password}
                                onChange={handleChange}
                                className={formErrors.password && "t-error"}
                            />
                            {formErrors.password && (
                                <div className='w-100'>
                                    <small className='error'>{formErrors.password}</small>
                                </div>
                            )}
                        </div></div>
                        <div className=' mx-auto mb-3'><div className="input-field ">
                            <lable htmlFor="file" className="me-auto ps-1 upload">Upload Your Profile Pic</lable>
                            <input type="file" id='file'
                                ref={refFile}
                                style={{ paddingBottom: "30px" }}
                                accept=".doc,.jpeg,.JPEG,.JPG,.png,.PNG,.pdf,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                placeholder='Upload your resume'
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
                        <button onClick={handleSubmitA} >
                            Sign up
                        </button>
                        <p>
                            <span>
                                Already have an account? 
                            </span>
                            <b onClick={toggleNew} className="LogIn-pointer">
                                 Sign in here
                            </b>
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup