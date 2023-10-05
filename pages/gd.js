import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Video from "../components/Videos/Video"
import classes from "../styles/gdpi.module.css"
import apiCall from "../utils/apiCall";
import TopBanner from "../components/TopBanner"
import AOS from 'aos';
import 'aos/dist/aos.css';
import SEOHeadComponent from "../components/SEOHeadComponent";
import { isBrowser } from "../utils/utilsFunctions";
const GD = ({ GD }) => {
    const metaTitle = GD?.gd_topics && GD?.gd_topics[0]?.meta_title || "";
    const metaDescription = GD?.gd_topics[0]?.meta_description || "";
    const H1 = GD?.gd_topics[0]?.H1 || "";
    // API Call for sample video slider
    const [data, setData] = useState({})
    useEffect(() => {
        const getData = async () => {
            try {
                const result = await apiCall("get_videos.php?page=gd", "get")
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
            <TopBanner imagPath={"/Image/GroupDiscussion.png"} />
            {metaTitle && metaDescription &&
                <SEOHeadComponent title={metaTitle} metaContent={metaDescription} h1={H1} />
            }
            <Container data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                {
                    GD.gd_topics[0] && isBrowser() &&
                    <>
                        <div className="" id='' dangerouslySetInnerHTML={getiframe(GD.gd_topics[0].current_topic)}></div>

                        <h3 className={`${classes.heading}`}>Current GD topics And Past GD Topics</h3>
                        <div className="" id='' dangerouslySetInnerHTML={getiframe(GD.gd_topics[0].past_topic)}></div>
                    </>
                }
            </Container>
            <Container style={{ padding: "30px" }} data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0">
                <h4 className={`${classes.heading}`}>Sample Video</h4>
                <Video videos={data} />
            </Container>
        </>
    )
}
export async function loadPosts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_gd_topics.php`)
    const data = await res.json()
    return data
}



export async function getServerSideProps() {
    const response = await loadPosts()
    return { props: { GD: response } }
}

export default GD;