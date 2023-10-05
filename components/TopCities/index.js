import React, { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
// import classes from "./AssociatedInstitutions.module.css"
import { Container, Row } from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link';
export default function TopCities({ CitiesData }) {
  const citiArray = CitiesData.Cities;
  const settings = {
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },

    ]
  };

  return (
    <>
      <Container data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
        <h3 className="heading">Top Cities </h3>
        <Slider {...settings} className="parent_cities_card ">
          {citiArray && citiArray.map((item) => {
            return (
              <Link key={item.city_name} href={`/Institutions/collegebycitiesname/${item.slug}`}>
                <div  className='cities_card'>
                  {
                    item.image == "" ? <Image loader={() => '/Image/cities.png'} src='/Image/cities.png' width="100%" height="100%" alt="Home slider 2" />
                      : <Image loader={() => `${item.image_path + item.image}`} src={`${item.image_path + item.image}`} width="100%" height="100%" alt="Home slider 2" />
                  }
                  <p>{item.city_name}</p>
                </div>
              </Link>
            )
          })
          }
        </Slider>
        <hr></hr>
      </Container>
    </>
  )
}

