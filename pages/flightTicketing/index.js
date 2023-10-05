import React, { useEffect } from 'react'
import classes from "../../styles/terms.module.css"
import Aos from 'aos';
import TopBanner from '../../components/TopBanner';
import SEOHeadComponent from '../../components/SEOHeadComponent';

const FlightTicketing = () => {
    useEffect(() => {
        Aos.init();
      }, [])
    return (
        <>
<TopBanner imagPath={"/Image/Accomodation.png"} />
<SEOHeadComponent title="Cheapest PGs & Places near you with all basic necessities" metaContent="Get the information of best and cheapest places on rent. Single & Double Occupancy rooms, PG/Hostel including food, and 1/2/3 BHK Flats with affordable charges." h1="  Flight Ticketing" />
            <section className="accommodation_list pb-5" data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <div className="container ">
                    <div className="row  s mx-auto">

                        {/* <h3 className={`${classes.heading_45}`}> Flight Ticketing</h3> */}
                        <h4 className={`${classes.heading_35}`}> OnDgo Travels</h4>
                        <p data-aos="fade-left"  data-aos-duration="500">OnDgo Tours & Travels is one of the premium tours and travel companies based in Indore, Madhya Pradesh, and was founded with the sole intention of providing clients with an enthralling traveling experience.</p>
                        <p data-aos="fade-left"  data-aos-duration="500">Taking care of the various needs and requirements of the clients, we are offering exclusive services such as Airline Ticketing Services, Travel Insurance Services for International Travel</p>

                        <ul className="ps-md-5">
                            <li>Selecting the proper means to travel</li>
                            <li>Optimization of costs</li>
                            <li>Hassle-free tour</li>
                        </ul>
                        <p data-aos="fade-left"  data-aos-duration="500">Parshwanath travels</p>
                        <p data-aos="fade-left"  data-aos-duration="500">Parshwanath Travels provide ticketing services designed to make it easy for travellers to search, compare, and book flights to their desired destinations.</p>
                        <ul className="ps-md-5">
                            <li>Flight Search and Comparison</li>
                            <li>Booking Options</li>
                            <li>Multiple Payment Options</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FlightTicketing