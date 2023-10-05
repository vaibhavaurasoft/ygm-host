import React, { useEffect } from 'react'
import classes from "./LatestNews.module.css"

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function LatestNews({ data }) {
    (function () {
        ('marquee').mouseover(function () {
            (this).attr('scrollamount', 0);
        }).mouseout(function () {
            (this).attr('scrollamount', 5);
        });
    });
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='container-fluid' data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <div className={`${classes.New_container}`}>
                <marquee behavior="scroll" direction="left" className={`${classes.marquee_container}`}>
                    {data && data.map(item => {
                        return (
                            <li key={item.news_id} className={`${classes.Li_tag}`} ><a href={`${item.news_link}`} className={`${classes.link}`} target="_blank" rel="noopener noreferrer"> {item.news_title} </a></li>
                        )
                    })}
                </marquee>
            </div>
        </div>
    )
}
