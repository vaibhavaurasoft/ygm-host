
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

const JobForm = () => {
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
            job_id: jobData,
        }
    }, [jobData])
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
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        validateFile(file)
        setIsSubmitting(true)
    }


    useEffect(() => {
        const PostData = async () => {
            const dataArray = new FormData();
            dataArray.append("fullname", formValues.fullname);
            dataArray.append("phone", formValues.phone);
            dataArray.append("email", formValues.email);
            dataArray.append("job_id", formValues.job_id);
            dataArray.append("file", file);
            try {
                const url = `${process.env.NEXT_PUBLIC_API_URL}/add_job_request.php`;
                const result = await axios.post(url, dataArray, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                toast.success(result.data.message)
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
            <TopBanner imagPath={"/Image/JoinUs.png"} alt={"for best services join us"} />
            <section className=''>
                <div className="container ">
                    <div className="form-container row">
                        <div className="col-lg-12">
                            <div className='  py-md-5 py-3 '>
                                <form onSubmit={handleSubmit} noValidate data-aos="zoom-in-right">
                                    <h4  className='heading my-2 fs-40  bg-white'>Job Application</h4>
                                    <div className='row'>
                                        <div  className='col-md-5 mx-auto'><div className="input-field ">
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
                                        <div className='col-md-5 mx-auto'> <div className="input-field ">

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
                                        <div className='col-md-5 mx-auto'><div className="input-field">

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
                                        <div className='col-md-5 mx-auto'><div className="input-field ">
                                            <lable htmlFor="file" className="me-auto ps-1" style={{ color: "green" }}>Upload your resume / CV here</lable>
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
                                    </div>
                                    <div className="input-field">
                                        <button type="submit" className='btn btn-outline-success submit-button btn_font'>Apply Now </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JobForm