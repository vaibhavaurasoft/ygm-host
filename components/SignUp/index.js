
import React, { useEffect, useMemo,  useState } from 'react';
import axios from "axios";
import validator from "validator";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import ForgotForm from '../ForgotForm';
import Signup from './signup';
import { setItem } from '../../utils/utilsFunctions';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../redux/slices/userSlice';
export default function SignUp({ popupClose }) {
  // forgot button
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    popupClose();
  }
  const handleShow = () => {
    setShow(true);
  }
  // signup
  const router = useRouter()
  const signUpData = router.query.id
  const initialValues = useMemo(() => {
    return {
      email: "",
      password: "",
    }
  }, [])
  const [formErrors, setFormErrors] = useState({})
  const [formValues, setFormValues] = useState(initialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const dispatch = useDispatch();
  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!validator.isEmail(values.email)) {
      errors.email = "Please enter valid email address";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    return errors;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  }

  useEffect(() => {
    const PostData = async () => {
      const dataArray = new FormData();
      dataArray.append("email", formValues.email);
      dataArray.append("password", formValues.password);
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/login_student.php`
        const result = await axios.post(url, dataArray, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        if (result.data.success && result.data.user) {
          setItem("GYC_login_user_data", JSON.stringify(result.data.user));
          dispatch(setUserDetails(result.data.user));
          toast.success(result.data.message);
          handleClose();
          popupClose();
          router.push("/myprofile")
        } else toast.error(result.data.message);
      } catch (error) {
        toast.error(error.message)
      }
    }
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      PostData();
      setFormValues(initialValues)
      setIsSubmitting(false)
    }
  }, [formErrors, isSubmitting, formValues, initialValues, popupClose])

  const [className, setClassName] = useState('sign-in');
  const toggleNew = () => {
    const toggleClass = className === 'sign-in' ? 'sign-up' : 'sign-in';
    setClassName(toggleClass);
  }
  return (
    <div id="LogIn" className={`LogIncontainer ${className}`}>
      <div className="LogInRow">
        <Signup toggleNew={toggleNew} handleClose={handleClose} popupClose={popupClose}/>
        <div className="LogIncol LogIn-align-items-center LogIn-flex-col sign-in">
          <div className="LogIn-form-wrapper LogIn-align-items-center">
            <div className="LogIn-form sign-in">
              <form onSubmit={handleSubmit} noValidate>
                <div className="LogIn-input-group">
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
                <div className="LogIn-input-group">
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
                </div>
                <button type="submit">
                  Sign In
                </button>
                <p>
                  <b className="LogIn-pointer" onClick={() => handleShow()}>
                    Forgot password?
                  </b>
                </p>


                <p>
                  <span>
                    Don&apos;t have an account?
                  </span>
                  <b onClick={toggleNew} className="LogIn-pointer">
                    Sign up here
                  </b>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="LogInRow LogIn-content-row">
        <div className="LogIncol LogIn-align-items-center LogIn-flex-col">
          <div className="LogIn-text sign-in">
            <h2>
              Welcome<br /> To YGM
            </h2>

          </div>
          <div className="LogIn-img sign-in">

          </div>
        </div>
        <div className="LogIncol LogIn-align-items-center LogIn-flex-col">
          <div className="LogIn-img sign-up">

          </div>
          <div className="LogIn-text sign-up">
            <h2>
              Join <br /> with  GYC
            </h2>

          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <ForgotForm onCloseModel={handleClose} />
      </Modal>
    </div>
  )
}