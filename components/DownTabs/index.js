import Link from 'next/link';
import React from 'react';

const index = () => {
    return (
        <div class="downTabs ">
            <div class="downTabs-links my-4 shadow-sm">
                <Link href={"/document"}>Documents</Link>
                <Link href={"/accommodation"}>Accomodation</Link>
                {/*  */}
                <Link href={"/forexServices"}>Forex services</Link>
                <Link href={"/studenttravelinsurance"}>Student Travel Insurance</Link>
                <Link href={"/flightTicketing"}>Flight ticketing</Link>
                <Link href={"/accommodation"}>Interview preparation</Link>

                {/* <Link href="/gd">Group Discussion</Link> */}
                {/* <Link href="/pi">Personal Interview</Link> */}
                {/* <Link href={"/educationloan"}>Foreign Education Loan</Link> */}
                {/* <Link href={"#"}>Student Visa</Link> */}
                {/* <Link href={"#"}>Permanent Resident</Link> */}

                <Link href="/#testimonials">Testimonial</Link>
                <a href={`${process.env.NEXT_PUBLIC_BLOG_API_URL}/all-blogs/`} rel="noopener noreferrer" target="_blank">Blogs</a>
                <Link href="/faq">FAQs</Link>
                <Link href="/contact">Contact Us</Link>
                <Link href="/careers">Careers</Link>

            </div>
        </div>)
}

export default index;