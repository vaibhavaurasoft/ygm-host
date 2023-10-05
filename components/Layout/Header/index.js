import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'
import MoreMenu from '../../MoreMenu.js/index.js';
import UserProfile from '../../UserProfile';
import SearchBar from './SearchBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import SignUp from '../../SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUGCourses } from '../../../redux/slices/courses/ugCoursesSlice';
import { fetchPGCourses } from '../../../redux/slices/courses/pgCoursesSlice';
import { fetchCoaching } from '../../../redux/slices/coaching/coachingSlice';
import { fetchUGExams } from '../../../redux/slices/exams/ugExamsSlice';
import { fetchPGExams } from '../../../redux/slices/exams/pgExamsSlice';
function Header() {
    let router = useRouter();
    const [hidenav, setHideNav] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);
    const ugCourses = useSelector((state) => state.ugCourses.data );
    const pgCourses = useSelector((state) => state.pgCourses.data );
    const Coaching = useSelector((state) => state.Coaching.data );
    const ugExams = useSelector((state) => state.ugExams.data );
    const pgExams = useSelector((state) => state.pgExams.data );
    const userDetails = useSelector((state) => state.user.userDetails);
    const dispatch = useDispatch();
    useEffect(() => {
        const handleNavbar = () => {
            if (lastScroll < window.scrollY && window.scrollY > 90) {
                setHideNav(true)
                setLastScroll(window.scrollY)
            } else {
                setHideNav(false)
                setLastScroll(window.scrollY)
            }
        }
        window.addEventListener('scroll', handleNavbar)
        return () => {
            window.removeEventListener("scroll", handleNavbar)
        }
    }, [hidenav, lastScroll])
    // Courses API fetch =========================
    useEffect(() => {
        dispatch(fetchUGCourses());
        dispatch(fetchPGCourses());
        dispatch(fetchCoaching());
        dispatch(fetchUGExams());
        dispatch(fetchPGExams());
    }, [])

    // Enquiry Button
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        checkUserLoginHandler();
    }
    const handleShow = () => {
        setShow(true);
    }
    useEffect(() => {
        AOS.init();
    }, [])
    const checkUserLoginHandler = async () => {
        if (userDetails) {
            setIsLogIn(true);
        } else setIsLogIn(false);
    }
    const [isLogIn, setIsLogIn] = useState(false);
    useEffect(() => {
        checkUserLoginHandler();
    },[userDetails]);
    const goToPage = (page) => {
        if (page && page !== 'home')
            router.push(`/${page}`);
        else router.push('/');
    }
    return (
        <div className={`wrapper ${hidenav && "hide-navbar"} `}>
        <nav data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <input type="checkbox" id="show-menu" />
            <div className="content ">
                <div className="logo"><Link href="/"><Image src="/Image/logo/gyclogo.png" width="110px" height="90px" alt="logo" /></Link></div>
                <SearchBar />
                <div className='ms-auto container showTab'>
                    <ul className="links " id='myDIV'>

                            <li className={`active-tab hideOnMobile ${router.pathname.includes('/home') || router.pathname === '/' ? 'active' : ''}`}><span onClick={() => goToPage('home')}>Home</span></li>
                            <li className={`active-tab hideOnMobile${router.pathname.includes('/about') ? 'active' : ''}`}><span onClick={() => goToPage('about')}>About</span></li>

                            <li className={`active-tab ${router.pathname.includes('/Institutions') ? 'active' : ''}`} ><span className='desktop-link dropdown-toggle' onClick={() => goToPage('Institutions')}>Countries/colleges</span>

                                <div className="waviy">
                                </div>
                                <input type="checkbox" id="show-features" />
                                <label htmlFor="show-features Institutions" id='animate-charcter'>Countries/colleges</label>
                                <ul className='institutionUl'>
                                    <li className='m-0 '>
                                        <Link href="javascript:void(0);" className="desktop-link dropdown-toggle " style={{ pointerEvents: "none" }} >C1</Link>
                                        <input type="checkbox" id="show-items" />
                                        <label className='small' htmlFor="show-items">C1</label>

                                    </li>
                                    <li className='m-0 '>
                                        <Link href="javascript:void(0);" className="desktop-link dropdown-toggle ">C2</Link>
                                        <input type="checkbox" id="show-items" />
                                        <label className='small' htmlFor="show-items">C2</label>
                                    </li>
                                    <li className='m-0 '>
                                        <Link href="javascript:void(0);" className="desktop-link dropdown-toggle ">C3</Link>
                                        <input type="checkbox" id="show-items" />
                                        <label className='small' htmlFor="show-items">C3</label>
                                    </li>
                                </ul>
                            </li>
                            <li className={`active-tab ${router.pathname.includes('/exams') ? 'active' : ''}`} ><span className="desktop-link dropdown-toggle" exam onClick={() => goToPage('exams')}> Exams</span>
                                <input type="checkbox" id="show-features" />
                                <label htmlFor="show-features ">Exams</label>

                                <ul className='examUL'>
                                    <li className='m-0 '>
                                        <Link href="javascript:void(0);" className="desktop-link dropdown-toggle ">UG Exam</Link>
                                        <input type="checkbox" id="show-items" />
                                        <label className='small' htmlFor="show-items">UG Exam</label>
                                        <ul>
                                            {ugExams && ugExams.exam_category && ugExams.exam_category.map((exam) => {
                                                return <li key={exam.category_id}><Link href={`/exams/examsbyname/${exam.category_id}?type=UG`} >{exam.category_name}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                    <li className='m-0 '>
                                        <Link href="javascript:void(0);" className="desktop-link dropdown-toggle ">PG Exam</Link>
                                        <input type="checkbox" id="show-items" />
                                        <label className='small' htmlFor="show-items">PG Exam</label>
                                        <ul>
                                            {pgExams && pgExams.exam_category && pgExams.exam_category.map((exam) => {
                                                return <li key={exam.category_id}><Link href={`/exams/examsbyname/${exam.category_id}?type=PG`} >{exam.category_name}</Link></li>
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={`active-tab  ${router.pathname.includes('/sholarships') ? 'active' : ''}`} ><span onClick={() => goToPage('sholarships')}>Scholarship </span></li>
                            {!isLogIn && <li onClick={handleShow} ><sapn className="active-tab Counselling ">Need Counselling</sapn></li>}

                            <li className={`active-tab hideOnMobile ${router.pathname.includes('/a') ? 'active' : ''}`} ><span onClick={() => goToPage('')}>Our Achievers</span></li>
                            <li className={`active-tab hideOnMobile ${router.pathname.includes('/educationloan') ? 'active' : ''}`} ><span onClick={() => goToPage('educationloan')}>Foreign Education Loan</span></li>
                            {/* <li className={`active-tab hideOnMobile ${router.pathname.includes('/forignJobs') ? 'active' : ''}`} ><span onClick={() => goToPage('about')}>Foreign Jobs </span></li>
                            <li className={`active-tab  hideOnMobile ${router.pathname.includes('/faq') ? 'active' : ''}`} ><span onClick={() => goToPage('faq')}>FAQ&apos;s </span></li> */}
                    </ul>
                </div>
                <MoreMenu />
                {
                    isLogIn && <UserProfile />
                }
            </div>
        </nav >
        <Modal show={show} onHide={handleClose}>
            <SignUp popupClose={handleClose} />
        </Modal> 
    </div >
    )
}

export default Header
