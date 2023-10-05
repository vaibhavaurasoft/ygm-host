import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import TopBanner from '../components/TopBanner';
import classes from "../styles/contact.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from '../components/SEOHeadComponent';
function Contact() {
    useEffect(() => {
        AOS.init();
    })
    return (
        <>

            <TopBanner imagPath={"/Image/ContactUs.png"} alt={"for collage information contact us"} />
            <SEOHeadComponent title='No. 1 Career Counseling agency in Indore, Get Your College' metaContent='Get Your College (GYC) is the best Career Counselor in Indore. GYC helps you understand your passion and achieve your dreams and gets you a right college.' h1='Best career counsellor in Indore - GYC' />
            <Container className={`${classes}`} data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <Row>
                    <Col lg="6" className={`${classes.ContactPage_text}`}>
                        <div >
                            <h3 className={`${classes.heading_45}`}>Head Office</h3>
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i><span>- 302, Balaji Corporate House, Above ICICI Bank,<br /> Zanzeerwala Square, New Palasia, Indore,<br />
                                    Madhya Pradesh
                                </span></li>
                                <li><i className="fas fa-phone"></i><span>Phone:  <a href="tel://7737080773"> 0731-4904343</a> ,</span></li>
                                <li><i className="fas fa-phone"></i><span>Mobile: <a href="tel://7737080773"> +91 7089434343</a></span></li>
                            </ul>
                        </div>
                        <div className='branch-office'>
                            <h3 className={`${classes.heading_45}`}>Branch Office</h3>
                            <ul>
                                {/* <li><i className="fas fa-map-marker-alt"></i><span>F -2 R-18, Aastha Square, Yudhishter Marg,<br />
                                    C- Scheme, Jaipur,<br />
                                    Rajasthan
                                </span></li> */}
                                <li><span>Contact Person: Reema Jain</span></li>
                                <li><i className="fas fa-phone"></i><span> <a href="tel://7737080773"> +91 7737080773</a></span></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="6" className={`${classes.form}`}>
                        <ContactForm />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <p data-aos="zoom-in" data-aos-duration="800">Contact Us - 19/1 New Palasia, 302 Balaji Corporate House Above ICICI Bank, Near Curewell hospital, Janjeerwala Square, Indore, Madhya Pradesh 452002</p>
                    <p data-aos="zoom-in" data-aos-duration="800">Get Your College (GYC) is a leading educational consultancy in Indore initiated by Mr Atul Jain & Mrs. Alisha Jain who together have over 11 years of experience and knowledge in the field of educational counseling and guidance. We are a team of expert counselors who aim to support the aspirations of students by helping them find a right college. We understand the importance of the role a college plays in the career of a student. With founding members who are graduates of Devi Ahilya Vishwavidyalaya, Symbiosis Institute of Management, and Mumbai University, we recognise the value of high-quality education and its influence on developing minds and careers. Our plan and goal is to dominate the student counseling industry in India while keeping honesty and integrity above everything. Our goal is to give students a wide range of selections from among the most prestigious colleges in India. Our goal is to reduce the distance between college applicants and schools. We constantly strive to do this by extending our virtual reach and providing the best suitable study programs for you that are offered nationally.</p>
                    <p data-aos="zoom-in">Along with GYC, we have one more counseling firm named Your Global Mentors for overseas education, job and PR. Your Global Mentors has become the preference of students who dream to study abroad; It is the doorway to Top foreign countries for all those who desire to go there for the purpose of Study, Job or Permanent Residency (PR). If you are finding it difficult to choose the course you should take and are not clear about your career goals, YGM will guide you through by understanding your personality and key strengths.Our experts with years of experience in the education field, assist you in getting admission in the best university by knowing your preferred course and country.  We work for admission in Canada, New Zealand, The USA, The UK, and Australia. Additionally, We prepare students for the demanding exams like IELTS, GRE, GMAT, TOEFL, ACT, PTE and SAT. From Application, Visa Process, Education Loan to SOP and Profiling, we take responsibility for all the vital steps that are required for your admission. Besides education, we also help individuals in getting a job in various fields in Germany, The USA, Japan, Dubai and Australia, as per their qualifications. We are affiliated with academic institutions and workplaces that are well-equipped. Our offices in the USA and Australia provide us with the most recent information on policies and processes. We have Highly committed and knowledgeable workforce that honors both student&apos;s potential and parents&apos; hard-earned money.</p>
                </Row>
            </Container>

            <Container fluid md={{ my: 2 }} data-aos="zoom-in-right"data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14721.186629121696!2d75.8717773!3d22.7172125!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcfe3d34ff26bd13!2sGet%20Your%20College!5e0!3m2!1sen!2sin!4v1655299996500!5m2!1sen!2sin"
                    width="100%"
                    height={450}
                    title="head office"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </Container>
        </>
    )
}

export default Contact