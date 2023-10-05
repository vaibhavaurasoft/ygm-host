import React, { useEffect, useMemo, useState } from 'react';
import validator from "validator";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import TopBanner from "../../components/TopBanner"
import apiCall from '../../utils/apiCall';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AccomodationForm = () => {
    const router = useRouter()
    const AccomodationData = router.query.id
    const initialValues = useMemo(() => {
        return {
            fullname: "",
            phone: "",
            email: "",
            accommodation_id: AccomodationData
        }
    }, [AccomodationData])
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
                const result = await apiCall("add_accommodation_enquiry.php", "post", formValues)
                if (result.data.status) {
                    toast.success(result.data.message);
                } else {
                    toast.error(result.data.message)
                }
            } catch (e) {
                toast.error(e.message, { position: "top-center", });

            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            PostData()
            setFormValues(initialValues);
            setIsSubmitting(false)
        }
    }, [formErrors, formValues, isSubmitting, initialValues])
    useEffect(() => {
        AOS.init();
    })
    return (<>
        <TopBanner imagPath={"/Image/Accomodation.png"} />
        <form onSubmit={handleSubmit} noValidate data-aos="fade-zoom-in">
            <div className='container'><h3 className='heading'>Accommodation Enquiry Form</h3></div>
            <div className='row my-3'>
                <div className='col-md-5 mx-auto'>
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
                </div>
                <div className='col-md-5 mx-auto'>
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
                </div>
                <div className='col-md-5 mx-auto'>
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
                </div>
            </div>
            <div className="input-field row mx-auto my-4">
                <button type="submit" style={{ width: '40%' }} className='btn btn-outline-success submit-button '>Send Message </button>
            </div>
        </form>
    </>
    )
}

export default AccomodationForm