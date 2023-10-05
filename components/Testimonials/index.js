import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from "./testimonial.module.css"
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

   
function Testimonials({ data }) {

    const testimonialsSettings = {
        centerPadding: "60px",
        infinite: true,
        speed: 1000,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000
    };

    useEffect(() => {
        AOS.init();
      })
    return (
        <>
            <Container className='Testimonials ' id='testimonials' data-aos="zoom-in-right"data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <h3 className="heading">Testimonials</h3>
                <Slider {...testimonialsSettings} className="px-md-5 px-1">
                    {data.testimonials && data.testimonials.map((item, index) => {
                        return <Row className={`${classes.testimonial_row}`} key={item.tid}>
                            <Col md="4" className={`${classes.testimonial_col}`}>
                                <div className={`${classes.testimonial_ImageBox}`}>
                                    <div className={`${classes.testimonial_Image}`}>
                                        <img layout='fill' loader={() => item.imagepath + item.image} src={item.imagepath + item.image} className={`${classes.testimonial_img}`} alt="client Image" />
                                        {/* <Image loader={() => item.imagepath + item.image}  src={item.imagepath + item.image} width="240" height="240" alt='client Image'></Image> */}
                                    </div>
                                    <h5 className={`${classes.testimonial_title}`}>{item.title}</h5>
                                    {/* <h6 className={`${classes.testimonial_row}`}>{item.position}</h6> */}
                                </div>
                            </Col>
                            <Col md="8">
                                <div className='right-content px-lg-4 '>
                                    <div className='text-start'><i className="ri-double-quotes-l quotes"></i></div>
                                    <div className='p-lg-4'>
                                        <p className={`${classes.card_text}`}>{item.description}</p>
                                    </div>
                                    <div className='text-end'><i className="ri-double-quotes-r quotes"></i></div>
                                </div>
                            </Col>
                        </Row>
                    })}
                </Slider>
            </Container>
        </>
    )
}

export default Testimonials