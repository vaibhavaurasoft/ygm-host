import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Video from "../components/Videos/Video"
import classes from "../styles/gdpi.module.css"
import apiCall from "../utils/apiCall";
import Resume from "../components/Resume"
import TopBanner from "../components/TopBanner"
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from "../components/SEOHeadComponent";
import { isBrowser } from "../utils/utilsFunctions";
const Pi = ({ PI }) => {
    console.log("PI", PI)
    const metaTitle = PI?.pi_question[0]?.meta_title || "";
    const metaDescription = PI?.pi_question && PI?.pi_question[0]?.meta_description || "";
    const H1 = PI?.pi_question[0]?.H1 || "";
    console.log("test", metaTitle, ":", metaDescription, metaTitle && metaDescription && true)
    // API Call for sample video slider
    const [data, setData] = useState({})
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await apiCall("get_videos.php?page=PI", "get")
                setData(result.data)
            } catch (error) {
                console.log("error", error)
            }
        }
        getData()
    }, [])

    // created a function for Iframe
    const getiframe = (iframe) => {
        if (iframe && isBrowser()) {
            return {
                __html: window.atob(iframe)
            }
        } else {
            return;
        }
    }
    useEffect(() => {
        AOS.init();
    })
    return (
        <>
            <TopBanner imagPath={"/Image/PersonalInterview.png"} alt={"personal interview introduction"} />
            {metaTitle && metaDescription &&
                <SEOHeadComponent title={metaTitle} metaContent={metaDescription} h1={H1} />
            }
            <Container data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                {
                    PI && isBrowser() && PI.pi_question.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <div className="" id='' dangerouslySetInnerHTML={getiframe(item.ug_questions)}></div>

                                <h2 className={`${classes.heading}`}>Current PI Questions And Past PI Questions
                                </h2>
                                <div className="" id='' dangerouslySetInnerHTML={getiframe(item.pg_questions)}></div>
                            </div>
                        )
                    })
                }
            </Container>
            <Container style={{ padding: "30px" }} data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <h4 className={`${classes.heading}`}>Sample Video</h4>
                <Video videos={data} />
            </Container>
            <Container data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <Resume />
            </Container>
        </>
    )
}


export async function loadPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_pi_question.php`)
    const data = await res.json()
    return data
}



export async function getServerSideProps() {
    const PIData = await loadPosts()
    return {
        props: {
            PI: PIData,
        }
    }
}

export default Pi;