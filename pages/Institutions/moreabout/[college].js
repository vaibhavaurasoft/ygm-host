import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Image from 'next/image'
import Link from 'next/link';
import SEOHeadComponent from '../../../components/SEOHeadComponent';
import { isBrowser } from '../../../utils/utilsFunctions';


function MoreAbout({ data, query }) {
  const getiframe = (iframe) => {
    if (iframe) {
      return {
        __html: iframe
      }
    } else {
      return;
    }
  }
  return (
    <>
      {
        (data[0].seo_description && data[0].seo_title) &&
        <SEOHeadComponent title={data[0].seo_title} metaContent={data[0].seo_description} />
      }
      {
        isBrowser() && <section id='ReadMorePopup'>
          <Container className='py-5'>
            <Row className="d-flex justify-content-center ">
              <Col sm="5" className='align-items-center d-flex'>
                <h4 className='heading'> <div style={{ color: "var(--yellow)" }} >{data[0].college_name} ({data[0].college_type})</div></h4>
              </Col>
              <Col sm="5" className='d-flex align-items-center justify-content-end'>
                <img layout='fill' loader={() => data[0].logo_path + data[0].college_logo} src={data[0].logo_path + data[0].college_logo} style={{ width: "200px" }} className="my-3" alt="LOGO" />
              </Col>
              <Col lg="10" className="d-flex readmore_imgSection">
                <>
                  {
                    data[0].iframe !== "" ? <div className='video-container' dangerouslySetInnerHTML={getiframe(window.atob(data[0].iframe))}  ></div>
                      : <img src={data[0].college_img_path + data[0].college_image} alt='LOGO' />
                  }
                </>
              </Col>
              <Col lg="10" className='my-3'>
                {
                  data[0].description && <p className='text-content ' dangerouslySetInnerHTML={getiframe(window.atob(data[0].description))}></p>
                }

                {data[0].address && data[0].city && data[0].state && <p className="card-text"><span><i className="fas fa-map-marker-alt"></i> Address</span> : {data[0].address}, {data[0].city}, {data[0].state}</p>}
                {data[0].phone && <p className="card-text"><span><i className="fas fa-phone"></i> Contact</span> : {data[0].phone}</p>}
                {data[0].email && <p className="card-text"><span><i className="fa-solid fa-envelope"></i> Email</span>  {data[0].email}</p>}
              </Col>
            </Row>
            <Container className='px-5' id="Apply_button">
              <Link className="btn mx-auto"  href={`/Institutions/collegeform/${query.college}?type=${data[0].college_type}`}>Apply Now</Link>
            </Container>
          </Container>
        </section>
      }
    </>

  )
}



export default MoreAbout


export async function getServerSideProps(context) {
  const { params, query } = context
  const { college } = params
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_college_by_id.php?collegeid=${college}&slug=1`)
  const data = await response.json()
  return {
    props: {
      query,
      data: data.college
    }
  }
}