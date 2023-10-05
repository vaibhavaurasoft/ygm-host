import React, { useEffect } from "react"
import Image from 'next/image'
import Router from 'next/router';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { getContent } from "../Blog";
import { isBrowser } from "../../utils/utilsFunctions";
import classes from "../../styles/terms.module.css"


function Accommodation({ accommodation }) {
  function sendProps(item) {
    Router.push({
      pathname: "/accommodation/accommodationForm",
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
      <section className="accommodation_list pb-5" data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
        <div className="container ">
          <div className="row  s mx-auto">
            {
              // accommodation.accommodation.length !== 0
              //   ?
              //   accommodation.accommodation.map((item, index) => {
              //     return <div key={item.accommodation_id} className=" p-md-2 p-1 col-md-6 col-lg-4 col-12 m-auto" >
              //       <div className="card acmd_card" >
              //         <div style={{ width: '100%', height: '255px', position: 'relative' }}>
              //           <Image layout='fill' loader={() => item.imagepath + item.image} src={item.imagepath + item.image} className="card-img-top" alt="profile Image" />
              //         </div>
              //         <div className="card-body">
              //           {
              //             item.accommodation_name &&
              //             <h4 className="card-title acmd_name ">{item.accommodation_name}</h4>
              //           }
              //           {
              //             item?.address &&
              //             <p className="card-text acmd_address"><i className="fas fa-map-marker-alt"></i> {item.address}</p>
              //           }
              //           {item?.description && isBrowser() &&
              //             <p className="card-text" dangerouslySetInnerHTML={getContent(item?.description)}></p>
              //           }
              //           {
              //             item.contact &&
              //             <p className="card-text acmd_contact"><span><i className="fas fa-phone"></i> mobile no : </span> {item.contact}</p>
              //           }
              //           <a className="btn btn-white btn-animate" onClick={() => sendProps(item.accommodation_id)}>Enquire Now</a>
              //         </div>
              //       </div>
              //     </div>
              //   })
              //   :
            }
            {/* <h3 className={`${classes.heading_45}`}>Amber Student</h3> */}

            <p data-aos="fade-left">Amber is a student housing booking website that serves over 2 million students worldwide and assists students in finding residential housing. In 2016, the company was founded in Pune, Maharashtra. Amber works with universities, property management companies, and study-abroad partners to help students find housing near their campuses. With a focused focus on the student housing sector, the company distinguishes itself from other real estate marketplaces by linking students to global lodging providers.</p>



            <h4 className={`${classes.heading_35}`}> Countries Accommodation Provided</h4>
            <ol className="ps-md-5">
              <li>United Kingdom  </li>
              <li>Australia</li>
              <li>USA</li>
              <li>Ireland</li>
              <li>Canada</li>
              <li>Germany</li>
              <li>Spain</li>
            </ol>
            <ul className="ps-md-5">

              <li>Quick and easy bookingsSpain</li>
              <li>Verified Properties</li>
              <li>24x7 Assistance</li>
              <li>Price Match Guarantee</li>
            </ul>

            <h3 className={`${classes.heading_45}`}>University Living </h3>

            <p data-aos="fade-left">
              University Living offers student housing in countries and towns all around the world. With millions of students attending university each year, there is a critical need for a simple, dependable, and smart way to identify and book student housing. University Living makes the process of finding the appropriate student housing simple, secure, and smooth by utilising cutting-edge technology, talent from all around the world, and creative thinking.
            </p>

            <h4 className={`${classes.heading_35}`}> Countries Provided</h4>
            <ol className="ps-md-5">
              <li>United Kingdom  </li>
              <li>Australia</li>
              <li>USA</li>
              <li>Ireland</li>
              <li>Canada</li>
            </ol>
            <ul className="ps-md-5">
              <li>Across 93+ Nationalities</li>
              <li>Reliable & Trustworthy</li>
              <li>Affordable Cost</li>
              <li>No hidden charges</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Accommodation