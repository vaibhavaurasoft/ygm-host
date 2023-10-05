import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import classes from "./footer.module.css"
import { fetchTopCoaching } from '../../../redux/slices/coaching/topCoachingSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopCities } from '../../../redux/slices/cities/topCitiesSlice'
import { fetchTopExams } from '../../../redux/slices/exams/topExamsSlice'
import { fetchTopColleges } from '../../../redux/slices/colleges/topCollegesSlice'


const Nav_Link = [
    // { title: "Home", path: "/" },
    // { title: "About", path: "/about" },
    // { title: "Exams", path: "/exam" },
    // { title: "GD", path: "/gd" },
    // { title: "PI", path: "/pi" },
    // { title: "Blog", path: "/" },
    { title: "Careers", path: "/careers" },
    { title: "Contact Us", path: "/contact" },
    { title: "Privacy policy", path: "/privacypolicy" },
    { title: "Terms", path: "/terms" },
    // { title: "accommodation", path: "/accommodation" },
    // { title: "educationloan", path: "/educationloan" },
]
const Footer = () => {
    const choching = useSelector((state) => state.topCoaching.data );
    const cities = useSelector((state) => state.topCities.data );
    const exams = useSelector((state) => state.topExams.data );
    const colleges = useSelector((state) => state.topColleges.data );
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchTopCoaching());
        dispatch(fetchTopCities());
        dispatch(fetchTopExams());
        dispatch(fetchTopColleges());
    }, [])


    // useEffect(() => {
    //     aos.init();
    // }, [])

    return (
        <section className={`${classes.Footer_section}`}>
            <Container>
                <Row>
                    <Col md="3">
                        <h2 className={`${classes.Foo_heading}`}>Top College</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}>
                            {
                                colleges && colleges.college_category
                                && colleges.college_category
                                    .map((item, index) => {
                                        if (index <= 4)
                                            return <li key={item.categoryID}><span className={`${classes.Foo_contant}`}><Link href={`/Institutions/collegebycategory/${item.categoryID}?type=${item.slug}`} >{item.category_name}</Link></span></li>
                                    })
                            }
                        </ul>
                    </Col>
                    <Col md="3">
                        <h2 className={`${classes.Foo_heading}`}>Top Exams</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}>

                            {
                                exams && exams.exam_category && exams.exam_category.map((item, index) => {
                                    if (index <= 4)
                                        return <li key={item.category_id}><span className={`${classes.Foo_contant}`}><Link href={`/exams/examsbycategory/${item.slug}?type=${item.category_id}`} >{item.category_name}</Link></span></li>
                                })
                            }
                        </ul>
                    </Col>
                    <Col md="3">
                        <h2 className={`${classes.Foo_heading}`}>Top Cities</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}>
                            {
                                cities && cities.Cities && cities.Cities.map((item, index) => {
                                    if (index <= 4)
                                        return <li key={item.cityID}><span className={`${classes.Foo_contant}`}><Link href={`/Institutions/collegebycitiesname/${item.slug}`}>{item.city_name}</Link></span></li>
                                })
                            }
                        </ul>
                    </Col>
                    <Col md="3">
                        <h2 className={`${classes.Foo_heading}`}>Top Coaching</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}>
                            {
                                choching && choching.college_category && choching.college_category.map((item, index) => {

                                    if (index <= 4) return <li key={item.categoryID}><span className={`${classes.Foo_contant}`}><Link href={`/Institutions/collegebycategory/${item.categoryID}?course=${item.slug}&type=Coaching`} >{item.category_name}</Link></span></li>
                                })
                            }
                        </ul>
                    </Col>

                </Row>

                <Row className='my-3'>
                    <Col md="3" >
                        <h2 className={`${classes.Foo_heading}`}>Head Office</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}>
                            <li><span className={`${classes.Foo_contant}`}>302, Balaji Corporate House, Above ICICI Bank,</span></li>
                            <li><span className={`${classes.Foo_contant}`}>Zanzeerwala Square, New Palasia, Indore,</span></li>
                            <li><span className={`${classes.Foo_contant}`}>Madhya Pradesh</span></li>
                            <li><span className="icon icon-phone" /><span className={`${classes.Foo_contant}`}>Phone : <a href="tel://0731-4904343">0731-4904343</a>,</span></li>
                            <li><span className="icon icon-phone" /><span className={`${classes.Foo_contant}`}>Mobile : <a href="tel://7089434343"> +91 7089434343</a></span></li>
                        </ul>
                    </Col>
                    <Col md="3">
                        <h2 className={`${classes.Foo_heading}`}>Branch Office</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}>
                            {/* <li><span className={`${classes.Foo_contant}`}>F -2 R-18, Aastha Square, Yudhishter Marg,</span></li> */}
                            {/* <li><span className={`${classes.Foo_contant}`}>C- Scheme, Jaipur,</span></li> */}
                            {/* <li><span className={`${classes.Foo_contant}`}>Rajasthan</span></li> */}
                            <li><span className="icon icon-phone" /><span className={`${classes.Foo_contant}`}>Contact Person: Reema Jain</span></li>
                            <li><span className="icon icon-phone" /><span className={`${classes.Foo_contant}`}>Mobile: <a href="tel://7737080773"> +91 7737080773</a> </span></li>
                        </ul>
                    </Col>

                    <Col md="3">
                        <h2 className={`${classes.Foo_heading}`}>Quick Links</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}  >
                            {
                                Nav_Link.map((item, index) => (<li key={index}><Link href={item.path}><a>{item.title}</a></Link></li>))
                            }
                        </ul>
                    </Col>
                    <Col md="3">
                        <h2 className={`${classes.Foo_heading}`}>Connect With Us</h2>
                        <ul className={`${classes.ul}`} style={{ paddingLeft: 0 }}>
                            <li  className={`${classes.li}`}><a href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill"></i></a></li>
                            <li  className={`${classes.li}`} ><a  href={process.env.NEXT_PUBLIC_YOUTUBE_URL} target="_blank" rel="noopener noreferrer"> <i className="ri-youtube-line"></i></a></li>
                            <li  className={`${classes.li}`}><a href={process.env.NEXT_PUBLIC_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><span className="icon-instagram" /> <i className="ri-instagram-line"></i></a></li>
                        </ul>
                    </Col>
                </Row>
                <hr></hr>
                <p id='dill'>
                    Get Your College © {new Date().getFullYear()} All rights reserved |
                    Made with  <i className="ri-heart-fill"  ></i> by <a className='auraLink' href={process.env.NEXT_PUBLIC_AURASOFT_URL} target="_blank" rel="noreferrer">Aurasoft</a>
                </p>
            </Container>
        </section>
    )
}


export default Footer