import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import TopBanner from '../components/TopBanner';
import classes from "../styles/contact.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from '../components/SEOHeadComponent';
import FAQ from '../components/FAQ';
function Faq({ faqData }) {
    useEffect(() => {
        AOS.init();
    })

    const [faqs, setfaqs] = useState(faqData);
    const toggleFAQ = (index) => {
        setfaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }
                return faq;
            })
        );
    };
    return (
        <>

            <TopBanner imagPath={"/Image/ContactUs.png"} alt={"for collage information contact us"} />
            <SEOHeadComponent title='No. 1 Career Counseling agency in Indore, Get Your College' metaContent='Get Your College (GYC) is the best Career Counselor in Indore. GYC helps you understand your passion and achieve your dreams and gets you a right college.' h1='Frequently Asked Questions and Answers' />
            <Container className={`${classes}`} >
                <Row>
                    <div className="faqs" data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                        {faqs && faqs.map((faq, i) => {
                            return <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} key={i} />;
                        })}
                    </div>
                </Row>
            </Container>
        </>
    )
}

export async function loadFaqs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_faq.php`)
    const data = await res.json()
    return data
}



export async function getServerSideProps() {
    const faqData = await loadFaqs()
    const allFaqs = faqData?.faqs;
    allFaqs.forEach(faq => faq.open = false)
    return { props: { faqData: allFaqs } }
}

export default Faq;