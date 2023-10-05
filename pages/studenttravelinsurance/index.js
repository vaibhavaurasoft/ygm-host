import React, { useEffect } from 'react'
import classes from "../../styles/terms.module.css"
import TopBanner from '../../components/TopBanner';
import SEOHeadComponent from '../../components/SEOHeadComponent';
import Aos from 'aos';

const StudentTravelInsurance = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <TopBanner imagPath={"/Image/Accomodation.png"} />
            <SEOHeadComponent title="Cheapest PGs & Places near you with all basic necessities" metaContent="Get the information of best and cheapest places on rent. Single & Double Occupancy rooms, PG/Hostel including food, and 1/2/3 BHK Flats with affordable charges." h1=" Student Travel Insurance" />

            <section className="accommodation_list pb-5" data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <div className="container ">
                    <div className="row  s mx-auto">

                        {/* <h3 className={`${classes.heading_45}`}> Student Travel Insurance</h3> */}
                        <h4 className={`${classes.heading_35}`}> TATA AIG</h4>
                        <p data-aos="fade-left"  data-aos-duration="500">TATA AIG&apos;s student travel insurance is designed with each student&apos;s specific needs in mind. Your student travel insurance, like other travel insurance policies, will reimburse you if you are forced to interrupt your studies due to a medical emergency. You can compare travel insurance plans to find the one that best suits you in terms of coverage amount and premium. Furthermore, the plans can be tailored so that you only pay for the days you are out of India rather than the entire year.</p>

                        <p data-aos="fade-left"  data-aos-duration="500">Features</p>
                        <ul className="ps-md-5">
                            <li>Cover For Accidents And Illnesses</li>
                            <li>Compassionate Visits</li>
                            <li>Study Interruption</li>
                            <li>Travel Assistance</li>
                            <li>Hijack Cover</li>
                            <li>Personal Liability</li>
                            <li>Baggage Loss or Delay</li>
                        </ul>
                        <p data-aos="fade-left"  data-aos-duration="500">Advantages Of TATA AIG International Student Travel Insurance</p>
                        <ul className="ps-md-5">
                            <li>Reimbursement if Study Interruption</li>
                            <li>Sponsor Protection</li>
                            <li>Pay In Rupees Get Cover In Dollars</li>
                            <li>Affordable Policies</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StudentTravelInsurance