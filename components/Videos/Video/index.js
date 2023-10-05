import React, { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classes from "./Video.module.css"
import { Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { isBrowser } from '../../../utils/utilsFunctions';
function Video({ videos }) {
    const settings = {
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    };
    const getiframe = (iframe) => {
        if (iframe) {
            return {
                __html: iframe
            }
        } else {

            return;
        }
    }
    useEffect(() => {
        AOS.init();
    })
    return (
        <div className='Video' data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <Slider {...settings} className="shadow-lg">
                {videos && isBrowser() && videos.videos?.map(item => {
                    return <div key={item.blog_id}>
                        <Row style={{ padding: "20px" }}>
                            <Col md="6" className={`${classes.Video_text}`} >
                                <h3 className={`${classes.Sub_heading}`}>{item.title}</h3>
                                <p>{window.atob(item.description)}</p>
                            </Col>
                            <Col md="6" style={{ padding: "20px" }}>
                                <div className='video-container' dangerouslySetInnerHTML={getiframe(item.iframe)}  >
                                </div>
                            </Col>

                        </Row>
                    </div>
                })
                }
            </Slider>
        </div>
    )
}

export default Video