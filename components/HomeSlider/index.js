import React from 'react'
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel';
export default function HomeSlider() {
    return (
        <>
            {/* -----------------------------------------------
            ============== Carousel Start ===================
            ----------------------------------------------- */}
            <Carousel className='Home_Slider'>
                <Carousel.Item>
                <Image loader={() => '/Image/home/sliders1.jpg'}  src={'/Image/home/sliders1.jpg'} width="1920" height="700" alt='get your college information'></Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image  loader={() => '/Image/home/sliders2.jpg'}  src={"/Image/home/sliders2.jpg"} width="1920" height="700"  alt="leading universities and colleges"></Image> 
                </Carousel.Item>
                <Carousel.Item>
                    <Image  loader={() => '/Image/home/sliders3.jpg'}  src={"/Image/home/sliders3.jpg"} width="1920" height="700" alt="Get your college services" ></Image>
                </Carousel.Item>
              </Carousel>
        </>
    )
}

