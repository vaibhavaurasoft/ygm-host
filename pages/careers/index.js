import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopBanner from '../../components/TopBanner'
import classes from "../../styles/careers.module.css"
import apiCall from '../../utils/apiCall'
import Router from 'next/router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from '../../components/SEOHeadComponent'
function Careers() {
    const [jobs, setJobs] = useState({});

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await apiCall("get_careers.php", "get")
                setJobs(result.data)
            } catch (error) {
                console.log("error", error)
            }
        }
        getData()
    }, [])

    function sendProps(item) {
        Router.push({
            pathname: "/careers/jobform",
            query: {
                id: item
            }
        })
    }
    useEffect(() => {
        AOS.init();
    })
    return (
        <>
            <TopBanner imagPath={"/Image/JoinUs.png"} alt={"for best services join us"} />
            <Container data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <SEOHeadComponent title='Career options in indore like a telecalling and more ' metaContent='What are the top career options you have after 12th, Graduation and Post Graduation courses? High-Income job options in Indore for career growth such as telecalling' h1=" Which courses provide the best career options and growth?" />
                <Row>
                    {jobs.careers && jobs.careers.length !== 0
                        ?
                        jobs.careers.map((item, index) => {
                            return (
                                <Col key={item.job_id} className={`${classes.Job_card}`} lg="4">
                                    <small>Current Openings</small>
                                    <p className={`${classes.job_title}`}>{item.job_title}</p>
                                    <div className={`${classes.job_menu}`}>
                                        <div className={`${classes.job_menuItem}`}><i className="ri-time-fill"></i><small>{item.posted_at}</small></div>
                                        <div className={`${classes.job_menuItem}`}><i className="ri-briefcase-4-fill"></i><small>{item.type}</small></div>
                                        <div className={`${classes.job_menuItem}`}><i className="ri-map-pin-fill"></i><small>{item.city}</small></div>
                                    </div>
                                    <div className={`${classes.job_cards}`}>
                                        <h6>Job Description :-</h6>
                                        <p>{item.description}</p>
                                        <h6>Required skills :-</h6>
                                        <p>{item.skills}</p>
                                    </div>
                                    <div className="text-box">
                                        <a className="btn btn-white btn-animate" onClick={() => sendProps(item.job_id)}>Apply Now</a>
                                    </div>
                                </Col>
                            )
                        })
                        :
                        <div>
                            <h6 className='text-danger text-center'>Currently no openings are available.</h6>
                        </div>
                    }
                </Row>
            </Container>
        </>
    )
}

export default Careers