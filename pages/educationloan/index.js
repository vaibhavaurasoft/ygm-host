import React, { useEffect, useState } from "react";
import TopBanner from "../../components/TopBanner";
import EducationLoan from "../../components/AlliedServices/EducationLoan.js";
import SEOHeadComponent from "../../components/SEOHeadComponent";
const Educationloan = ({ Loan }) => {
    return (
        <>
            <TopBanner imagPath={"/Image/Banking.png"} alt={"small interest education loan"} />
            <SEOHeadComponent title="How to get an Instant education loan with a low interest?" metaContent="Want to get an education loan instantly for further studies? Know the best education loan schemes for national and international studies with lowest interest." h1="Education Loan Process, Eligibility and all other details"/>
            <EducationLoan Loan={Loan} />
        </>
    )
}

export async function loadPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_loans.php`)
    const data = await res.json()
    return data
}



export async function getServerSideProps() {
    const data = await loadPosts()
    return {
        props: {
            Loan: data 
        }
    }
}

export default Educationloan;