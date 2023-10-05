import Link from 'next/link';
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import aos from 'aos';
import 'aos/dist/aos.css';
import { isBrowser } from '../../utils/utilsFunctions';

export const getContent = (content) => {
    if (content) {
        return {
            __html: window.atob(content)
        }
    } else {
        return;
    }
}
function Blog({ data }) {
    const [time, setTime] = useState("")
    const article = useRef("")

    useEffect(() => {
        const wpm = 200;
        const words = article.current.innerText;
        // const words = article.current.innerText.trim().split(/\s+/).length;
        setTime(Math.ceil(words / wpm));
    }, [])
    useEffect(() => {
        aos.init();
      })
    return (
        <> 
            <Container data-aos="zoom-in-right"data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
                <h3 className="heading">Blogs</h3>
                <Row>
                    {
                        data?.blogs && isBrowser() && data?.blogs.map((blog) => {
                            return (
                                <Col md="4" key={blog.blog_id}>
                                    <div className='blogCard  text-left'>
                                        <div className="blogCard-header">
                                            {/* <img layout='fill' loader={() => blog.imagepath + blog.image} src={blog.imagepath + blog.image} alt="blog" /> */}
                                            <Image loader={() => blog.imagepath + blog.image}  src={blog.imagepath + blog.image} width="450" height="300" alt='blog'></Image>
                                        </div>
                                        <div className="blogCard-body">
                                            <h4 className='title_blog_long'>{window.atob(blog.title)}</h4>
                                            <p className='small_disc Blog_disc' id='article' ref={article} dangerouslySetInnerHTML={getContent(blog.content)}>
                                            </p>

                                        </div>
                                        <p className="px-2">  <span className="">Posted Date :-</span> {blog.posted_date}</p>
                                        {/* <div className="blogCard-footer">
                                            <div className="postDetails">
                                            </div>
                                        </div> */}
                                        <h5 className=' my-md-0 my-3 px-2'>
                                            <a href={blog.blog_link}> Read More . . .</a>
                                        </h5>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
                <Container className='mb-5'>
                    <a className="btn btn-white btn-animate" href={`${process.env.NEXT_PUBLIC_BLOG_API_URL}/all-blogs`} > View all blogs</a>
                </Container>

            </Container>

        </>
    )
}

export default Blog