import { Container, Modal, Table } from "react-bootstrap";
import classes from "../../../styles/exam.module.css"
import TopBanner from "../../../components/TopBanner"
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { isBrowser } from "../../../utils/utilsFunctions";
import Pagination from "../../../components/Pagination";
import ContactForm from "../../../components/ContactForm";
function ExamCategory({ examData, query, totalPages, currentPage }) {
    const type = query.type;
    const exam = query.exam;
    useEffect(() => {
        AOS.init();
    })
    const [show, setShow] = useState(false);
    const [defaultMessage, setDefaultMessage] = useState("");
    const [webUrl, setWebUrl] = useState("");
    const handleClose = () => {
        setShow(false);
        setDefaultMessage("");
        setWebUrl("")
    }
    const handleShow = (examName, url) => {
        setShow(true);
        setDefaultMessage(`Enquired for ${examName} exam`);
        setWebUrl(url);
    }


    return <>
        {
            query.category == "1" && <TopBanner imagPath={"/Image/Undergraduate.png"} />
        }
        {
            query.category == "2" && <TopBanner imagPath={"/Image/Postgraduate.png"} />
        }
        <div div className="p-3" >
            <h2 className='heading text-start'>
                {query.exam}
            </h2>
            <Container fluid className={`${classes.table}`} >
                <Table striped="columns" >
                    <thead className={`${classes.table_body}`}>
                        <tr>
                            <th>S.No.</th>
                            <th>Exam Name</th>
                            <th>Conducting Body</th>
                            <th>Participating Institutes</th>
                            <th>Issue of Form</th>
                            <th>Last Date of Submission</th>
                            <th>Examination Date</th>
                            <th>Application Form Fee</th>
                            <th>Information Webpage</th>
                        </tr>
                    </thead>
                    <tbody  >
                        {
                            isBrowser() && examData.exams.length !== 0
                                ?
                                examData.exams.map((item, index) => {
                                    return <tr key={item.examid}>
                                        <td>{index + 1}</td>
                                        <td><a className={`${classes.examName}`} href={item?.exam_link || "javascript:void(0)"}> {item.exam_name}</a></td>
                                        <td>{item.conduct_by}</td>
                                        <td>{item.participating_institute}</td>
                                        <td>{item.issue_form_date}</td>
                                        <td>{item.form_last_date}</td>
                                        <td>{item.exam_date}</td>
                                        <td>{window.atob(item.form_fee)}</td>
                                        <td><span style={{ color: "var(--yellow)", cursor: "pointer", fontWeight: 500 }} onClick={() => handleShow(item.exam_name, item.web_url)}>{item.web_url}</span></td>
                                    </tr>
                                })
                                :
                                <tr>
                                    <h6 className='text-danger text-center examText'>There is no exam found </h6>
                                </tr>
                        }
                    </tbody>
                </Table>
            </Container>
            {totalPages > 1 && <div className='mt-1'><Pagination totalPages={totalPages} pageName={`exams/examsbycategory/${exam}?type=${type}`} currentPage={currentPage} paramsExist={true} /></div>}
        </div >
        <section className='px-md-5 px-2' data-aos="zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
            <h5 className="heading  fs-32 ">Disclaimer</h5>
            <p className='px-md-5 px-0 mb-5 text-center'>
                “The above-mentioned dates are tentative and given as per previous trends of exams, these dates
                are subject to change as Exam Conducting Organization&apos;s may deem fit. We do not claim any
                guarantee on such dates and conducting of exams”
            </p>
        </section>
        <Modal show={show} onHide={handleClose}>
            <ContactForm onCloseModel={handleClose} defaultMessage={defaultMessage} webUrl={webUrl} />
        </Modal>
    </ >
}
export default ExamCategory

export async function getServerSideProps(context) {
    const { query } = context;
    const page = Number(query.page || 1);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_exams_by_category.php?category=${query.type}&currentpage=${page}`)
    const data = await response.json()
    return {
        props: {
            examData: data,
            query,
            totalPages: data?.totalpages || 1,
            currentPage: page,
        }
    }
}