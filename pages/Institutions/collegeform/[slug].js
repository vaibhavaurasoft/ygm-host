import React, { useState, useEffect, useMemo } from 'react'
import moment from 'moment';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import validator from "validator";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import apiCall from '../../../utils/apiCall';
import aos from 'aos';
import 'aos/dist/aos.css';
import { useSelector } from 'react-redux';

function CollegeForm({ data, query }) {

    const type = query.type
    const [selectedCourse, setSelectedCourse] = useState(query.course);
    const [courses, setCourses] = useState({});
    const [radio, setRadio] = useState('');
    const [courseD, setCourseD] = useState('No data available please select course type');
    const userDetails = useSelector((state) => state.user.userDetails);

    const [dob, setDate] = useState()
    const slug = query.slug;

    // Course select 
    const handleChangeNew = (event) => {
        setCourseD(event.target.value);
        setFormValues({ ...formValues, course: event.target.value })
    };
    const handleChangeRedio = (event) => {
        setRadio(event.target.value);
    };


    useEffect(() => {
        const getCourses = async () => {
            try {
                type === "Coaching" && setRadio(3);
                const response = await apiCall(`get_college_courses.php?slug=${slug}&ctype=${radio}`, "get")
                setCourses(response.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getCourses()
    }, [radio, slug])


    const initialValues = useMemo(() => {
        // "Coaching"
        if (type == "Coaching") {
            return {
                fullname: "",
                email: "",
                phone: "",
                dob: "",
                course: selectedCourse,
                coaching_id: data.college_id,
                city: "",
                student_id: userDetails?.studentID || '',
            }
        } else {
            return {
                fullname: "",
                email: "",
                phone: "",
                dob: "",
                course: selectedCourse,
                college_id: data.college_id,
                city: "",
                student_id: userDetails?.studentID || '',
            }
        }

    }, [data.college_id, selectedCourse, type])

    useEffect(() => {
        setSelectedCourse(courseD)
    }, [courseD])

    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [maxDate] = useState(() => {
        const maxDate = new Date()
        maxDate.setDate(maxDate.getDate() - 1)
        return maxDate
    })
    const [minDate] = useState(() => {
        const minDate = new Date()
        minDate.setFullYear(maxDate.getFullYear() - 100)
        return minDate
    })
    const validate = (values) => {
        let errors = {};
        if (!values.fullname) {
            errors.fullname = "Full name is required";
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
        if (!values.dob) {
            errors.dob = "DOB is required";
        }
        if (!values.course) {
            errors.course = "Course is required";
        }
        if (!values.city) {
            errors.city = "City is required";
        }
        return errors;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmitting(true)
        setCourseD(" ")
    }

    const handleDate = (str) => {
        if (str) {
            const dob = moment(str).format("DD-MM-YYYY")
            setDate(str)
            setFormValues({ ...formValues, dob })
        }
    }

    useEffect(() => {
        const submitForm = async () => {
            try {
                if (type === "Coaching") {
                    const result = await apiCall(`add_coaching_enquiry.php`, "post", formValues)
                    if (result.data.status) {
                        toast.success(result.data.message);
                    } else {
                        toast.error(result.data.message)
                    }
                }
                else {
                    const result = await apiCall(`add_college_enquiry.php`, "post", formValues)
                    if (result.data.status) {
                        toast.success(result.data.message);
                    } else {
                        toast.error(result.data.message)
                    }
                }
            } catch (error) {
                console.log(error.message)
                toast.error(error.message)
            }
        }
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submitForm();
            setFormValues(initialValues)
            setDate(null)
            setIsSubmitting(false)
        }
    }, [isSubmitting, formErrors, formValues, initialValues, type, courseD])


    useEffect(() => {
        aos.init();
    }, [])


    return (
        <>
            <section className=' md-my-5 my-1 py-md-5 ' >
                <div className="container ">
                    <div className="form-container row">
                        <div className="col-lg-12 p-0">
                            <div className='shadow-lg'>
                                <form noValidate className='row d-flex justify-content-center ' >
                                    {
                                        data.college_image !== "" && `${data?.college_img_path}${data.college_image} ` && <img layout='fill' loader={() => data.college_img_path + data.college_image} src={`${data.college_img_path}${data.college_image} `} className="img-fluid" alt="Dynamic Collages image" />
                                    }
                                    <h2 className='main-heading mt-2'>Please Fill The Form</h2>
                                    {data?.college_name &&
                                        <h4 className='main-heading mt-2'>{data?.college_name}</h4>
                                    }
                                    <div className="input-field col-5 my-md-3 my-1 ">
                                        <input
                                            type="text "
                                            placeholder='Enter Your Full Name'
                                            id='fullname'
                                            name='fullname'
                                            value={formValues.fullname}
                                            onChange={handleChange}
                                            className={formErrors.fullname && "input-error"}
                                            autoComplete="off"
                                        />
                                        {formErrors.fullname && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.fullname}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <input type="number" id='phone'
                                            placeholder='Enter Your Phone Number'
                                            name='phone'
                                            value={formValues.phone}
                                            onChange={handleChange}
                                            className={formErrors.phone && "input-error"}
                                            autoComplete="off"
                                        />
                                        {formErrors.phone && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.phone}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <input type="email" id='email'
                                            placeholder='Enter Your Email'
                                            name='email'
                                            value={formValues.email}
                                            onChange={handleChange}
                                            className={formErrors.email && "input-error"}
                                            autoComplete="off"
                                        />
                                        {formErrors.email && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.email}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <DatePicker
                                            selected={dob ? dob : null}
                                            onChange={(date) => handleDate(date)}
                                            className={formErrors.dob && 'input-error'}
                                            id="dob" name='dob' placeholderText="Enter DOB"
                                            dateFormat={"dd-MM-yyyy"}
                                            autoComplete='off'
                                            showYearDropdown
                                            minDate={minDate ? minDate : new Date()}
                                            maxDate={maxDate ? maxDate : new Date()}
                                        />
                                        {formErrors.dob && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.dob}</small>
                                            </div>
                                        )}
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <input
                                            type="text"
                                            id='collegeName'
                                            name='collegeName'
                                            value={data.college_name}
                                            autoComplete="off"
                                            disabled
                                        />
                                    </div>
                                    <div className="input-field col-5 my-md-3 my-1">
                                        <input type="text" id='city' name='city'
                                            placeholder='Enter Your City'
                                            value={formValues.city}
                                            onChange={handleChange}
                                            className={formErrors.city && "input-error"}
                                            autoComplete="off" />
                                        {formErrors.city && (
                                            <div className='w-100'>
                                                <small className='error'>{formErrors.city}</small>
                                            </div>
                                        )}
                                    </div>
                                    {
                                        query?.course ?
                                            <div div className="input-field col-5 my-md-3 my-1">
                                                <input type="text" id='course'
                                                    name='course'
                                                    value={query.course}
                                                    onChange={handleChange}
                                                    className={formErrors.course && "input-error"}
                                                    autoComplete="off"
                                                    readOnly
                                                    disabled
                                                />
                                                {formErrors.course && (
                                                    <div className='w-100'>
                                                        <small className='error'>{formErrors.course}</small>
                                                    </div>
                                                )}
                                            </div>
                                            :
                                            <div className="container Course_dropdown text-center ">
                                                <FormControl>
                                                    <span>Select your course</span>
                                                    {type !== "Coaching" &&
                                                        <RadioGroup
                                                            row
                                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                                            name="row-radio-buttons-group"
                                                        >
                                                            <FormControlLabel value={1} onChange={handleChangeRedio} control={<Radio />} label="UG" />
                                                            <FormControlLabel value={2} onChange={handleChangeRedio} control={<Radio />} label="PG" />
                                                        </RadioGroup>
                                                    }
                                                </FormControl>
                                                <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
                                                    <Select
                                                        labelId="courseD-label"
                                                        id="courseD"
                                                        value={courseD}
                                                        onChange={handleChangeNew}
                                                        label="please select course"
                                                        className={formErrors.course ? "input-error borderSelect" : "borderSelect"}
                                                    >
                                                        {
                                                            (radio !== "" && courses.college_courses) ? courses.college_courses.map((course) => {
                                                                return <MenuItem key={course.course_name} value={course.course}>{course.course}</MenuItem>
                                                            }) : (type !== "Coaching" && <MenuItem value="No data available please select course type">No data available please select course type</MenuItem>)
                                                        }
                                                    </Select>
                                                </FormControl>
                                                {formErrors.course && (
                                                    <div className='w-100'>
                                                        <small className='error'>{formErrors.course}</small>
                                                    </div>
                                                )}
                                            </div>
                                    }
                                    <div className="input-field col-md-8 col-10 my-3">
                                        <button type="button" className='btn btn-outline-success submit-button ' onClick={handleSubmit}>Apply Now </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
        </>
    )
}

export default CollegeForm

export async function getServerSideProps(context) {
    const { params, query } = context
    const { slug } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_college_by_id.php?collegeid=${slug}&slug=1`)
    const data = await response.json()
    return {
        props: {
            query,
            data: data.college[0]
        }
    }
}