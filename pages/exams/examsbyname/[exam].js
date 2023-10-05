import { Container, Modal, Table } from "react-bootstrap";
import TopBanner from "../../../components/TopBanner"
import classes from "../../../styles/exam.module.css"
import { isBrowser } from "../../../utils/utilsFunctions";
import Pagination from "../../../components/Pagination";
import ContactForm from "../../../components/ContactForm";
import { useState } from "react";

function ExamCategoryByName({ exam, examData, query, totalPages, currentPage }) {
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
    const type = query.type;
    return <>
        {
            type === "UG" && <TopBanner imagPath={"/Image/Undergraduate.png"} alt={"UG university and college for me"} />
        }
        {
            type === "PG" && <TopBanner imagPath={"/Image/Postgraduate.png"} alt={"PG college and university foe me"} />
        }
        <div div className="p-3" >
            <h2 className='heading text-start'>
                {type === "UG" ? "UG Exams " : type === "PG" ? "PG Exams " : "All Exams "}
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
                                    <td>
                                        <h6 className='text-danger text-center examText'>There is no exam found </h6>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </Table>
            </Container>
            {totalPages > 1 && <div className='mt-1'><Pagination totalPages={totalPages} pageName={`exams/examsbyname/${exam}?type=${type}`} currentPage={currentPage} paramsExist={true} /></div>}
        </div >
        <section className='px-md-5 px-2'>
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
export default ExamCategoryByName

export async function getServerSideProps(context) {
    const { params, query } = context
    const page = Number(query.page || 1);
    const { exam } = params
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get_exams_by_category.php?category=${exam}&currentpage=${page}`)
    const data = await response.json()
    return {
        props: {
            examData: data,
            query,
            totalPages: data?.totalpages || 1,
            currentPage: page,
            exam
        }
    }
}