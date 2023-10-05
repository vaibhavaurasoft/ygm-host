import React, { useEffect, useState } from "react";
import TopBanner from "../../components/TopBanner"
import Accommodation from "../../components/AlliedServices/Accommodation.js"
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from "../../components/SEOHeadComponent";


const Accommodations = ({ accommodation }) => {
    useEffect(() => {
           AOS.init();
         }, [])
         return (
             <>
            <TopBanner imagPath={"/Image/Accomodation.png"} />
            <SEOHeadComponent title="Cheapest PGs & Places near you with all basic necessities" metaContent="Get the information of best and cheapest places on rent. Single & Double Occupancy rooms, PG/Hostel including food, and 1/2/3 BHK Flats with affordable charges." h1=" Amber Student
" />
            <Accommodation accommodation={accommodation} />
        </>
    )
}

export async function loadPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_accommodation.php`)
    const data = await res.json()
    return data
}



export async function getServerSideProps() {
    const response = await loadPosts()
    return {
        props: {
            accommodation: response 
        }
    }
}

export default Accommodations;