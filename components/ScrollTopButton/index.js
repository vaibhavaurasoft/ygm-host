import React, { useEffect } from 'react'
import { isBrowser } from '../../utils/utilsFunctions';

function ScrollTopButton() {

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function scrollFunction() {
        if (
            document.body.scrollTop > 500 ||
            document.documentElement.scrollTop > 500
        ) {
            document.getElementById("Scroll_button").style.display = "block";
        } else {
            document.getElementById("Scroll_button").style.display = "none";
        }
    }

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };
    }, [])
    return (
        <button className="Scroll_button" id='Scroll_button' onClick={() => scrollToTop({ top: 0, behavior: 'smooth' })}><i className="ri-arrow-up-circle-fill"></i></button>
    )
}

export default ScrollTopButton