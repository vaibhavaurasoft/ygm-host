import React, { useEffect } from 'react'
import classes from "../../styles/terms.module.css"
import TopBanner from '../../components/TopBanner';
import SEOHeadComponent from '../../components/SEOHeadComponent';
import Aos from 'aos';

const Forex = () => {

    useEffect(() => {
        Aos.init();
    }, [])


    return (
        <>
            <TopBanner imagPath={"/Image/Accomodation.png"} />
            <SEOHeadComponent title="Cheapest PGs & Places near you with all basic necessities" metaContent="Get the information of best and cheapest places on rent. Single & Double Occupancy rooms, PG/Hostel including food, and 1/2/3 BHK Flats with affordable charges." h1=" Forex Services" />

            <section className="accommodation_list pb-5" data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <div className="container ">
                    <div className="row  s mx-auto">

                        {/* <h3 className={`${classes.heading_45}`}> Forex Services</h3> */}
                        <h4 className={`${classes.heading_35}`}> ICICI Bank</h4>
                        <p data-aos="fade-left"  data-aos-duration="500">Foreign exchange solution with ICICI Bank Forex Services</p>
                        <p data-aos="fade-left"  data-aos-duration="500"><b>ICICI Bank Travel Card:</b> A forex card that comes pre-loaded with 15 different currencies.
                        </p>
                        <p data-aos="fade-left"  data-aos-duration="500"><b>Foreign Demand Drafts:</b> A convenient method of remitting application fees.
                        </p>
                        <p data-aos="fade-left"  data-aos-duration="500"><b>Solutions for Outward Remittances:</b> For easy international wire transfers and payment of university tuition
                        </p>
                        <p data-aos="fade-left"  data-aos-duration="500"><b>foreign currency:</b> In 13 currencies to help you meet your daily expenses</p>
                        <p data-aos="fade-left"  data-aos-duration="500"><b>Individual Student Insurance Policy:</b> To accomplish the mandate outlined in the Admission Criteria while providing comprehensive coverage.</p>
                        <p data-aos="fade-left"  data-aos-duration="500"></p>
                        <ul className="ps-md-5">
                            <li>Transfer funds over the world with a wire transfer or a foreign currency demand draft.</li>
                            <li>Simple, dependable, and efficient method of sending money outside of India</li>
                            <li>Available in 21 different currencies</li>
                            <li>Transfer online at any time and from any location.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Forex