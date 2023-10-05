import React, { useEffect } from 'react'
import classes from "../styles/terms.module.css"
import TopBanner from '../components/TopBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Document = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <TopBanner imagPath={"/Image/Terms.jpg"} />
      <section data-aos="zoom-in-right" data-aos-easing="ease-in-back" data-aos-delay="500" data-aos-offset="0">
        <div className='container Policy_text terms_text p-1 '>
          <div className="container">
            <h3 className={`${classes.heading_45}`}>Statement of Purpose (SOP)</h3>
            <p data-aos="fade-left"  data-aos-duration="500">An SOP is a long essay that is often asked by universities abroad. The full form of SOP is a Statement of Purpose. Usually about 1000 words, this essay seeks to understand the candidate&apos;s life, the motivations for the chosen career path, and his/her goals. There are many elements to a Statement of Purpose or an SOP as it is famously referred to. The Universities could ask question-based essays or simply present your statement of purpose. Until and unless categorically asked, an SOP must include your goals, the career path you have taken up so far as well as your academic progress. Other elements that are further important to the SOP are also the personal motivations that lead you to choose the university/course you have applied to as well as how you intend to use that experience to achieve that goal.</p>

            <p data-aos="fade-left"  data-aos-duration="500">As is often pointed out, a well-written essay/ statement of purpose is extremely critical to your admission. Needless to say, many aspects of acandidate&apos;s application are inspected before finalising a decision. While theacademic record and other exam scorecards are essentially objective, amSOP is the only truly subjective aspect of your application. It is, simply put, theonly document in your application that allows you to prove that you havesomething unique that makes you stand out from the crowd. As such, it is the document of your application docket that can hugely determine your admission.</p>


            {/* ///////////////////// */}
            <h4 className={`${classes.heading_35}`}>How to Write a Winning SOP?</h4>
            <p data-aos="fade-left"  data-aos-duration="500">Now that we have assessed how important your SOP is, we come to the important part – how to write a SOP and more importantly, how to write a winning SOP. There are the basics about the SOP, as to what you need to keep in mind like the general word limit, the format, etc. What is important to note is that you must, at all times, remember which course you are writing the SOP for? Specifically speaking, an SOP for an MBA Application would be rather different from an SOP for a Masters&apos; course like an MS or an M.Sc. Similarly, an SOP for a Bachelor Course would be widely different from any of the two</p>
            <p data-aos="fade-left"  data-aos-duration="500">The most important documents require the most attention. SOP is the most important document and we at <b> Your Global Mentors </b>help you in drafting a Statement of Purpose as per the latest trends and requirements, we have a professional team of experts to help you.</p>
            {/* ///////////////////// */}
            <h3 className={`${classes.heading_45}`}>Admission Essays</h3>

            <p data-aos="fade-left"  data-aos-duration="500">If you have landed on this page chances are you are planning to pursue MBA or a related course from a University Abroad. As the name suggests, Admission Essays are essays or documents sought by universities abroad to consider your candidature for specific courses. While there is no rule of thumb for the kind of essays the universities might ask, we categorise the question-answer type essays in this section.</p>

            <p data-aos="fade-left"  data-aos-duration="500">To elucidate further, Universities abroad (often but not mandatorily) for specific courses require you to answer a few specific questions. They have a wide range of context and might be aimed at further elaborating different facets of the applicant&apos;s personality as per the University&apos;s specific demands of the course. For instance, universities might believe that as an MBA applicant, the candidate must possess effective leadership qualities or a University for its highly acclaimed MIS program requires the agility of mind and aptitude for innovation. In such scenarios, a simple Statement of Purpose might just not be enough. To counter the limitations of asking for one central and generic essay (read SOP), Universities decide to instead break up the essays into relevant questions. And these are widely known as Admission Essays.</p>
            <p data-aos="fade-left"  data-aos-duration="500">In character, Admissions Essays are very much a written essay but unlike a SOP, there is no standard format. Universities would provide the applicants with a list of required questions or essays. They usually vary as per the requirements of the University&apos;s program and are created carefully to ascertain the eligibility of the applicant. Also, and more importantly, they are designed to prune the list and find the candidates that would be the correct fit for their  </p>


            <h4 className={`${classes.heading_35}`}>Types of Admission Essays</h4>

            <p data-aos="fade-left"  data-aos-duration="500">It is important to recognize the different types of admission essays that the universities ask for before starting to draft as the content highly depends on the type and essay prompt/ topic. Broadly, the Admission Essays can be classified based on</p>




            <ol className={`${classes.ul}`}>
              <li>
                <p data-aos="fade-left"  data-aos-duration="500"><strong className={`${classes.heading_25}`}> Word Limit </strong> - the actual length of the essay. </p>
                <p data-aos="fade-left"  data-aos-duration="500">· Very Short Answer Questions/ Write-ups (30 – 200 words)</p>
                <p data-aos="fade-left"  data-aos-duration="500">· Short Answer Questions/Essays (200 – 500 words)</p>
                <p data-aos="fade-left"  data-aos-duration="500">· Long Answer Questions/ Essays (More than 500 words but less than 800 words)</p>
                <p data-aos="fade-left"  data-aos-duration="500">· Full-Length Essays (More than 800 words)</p>
              </li>
              <li>
                <p data-aos="fade-left"  data-aos-duration="500"><strong className={`${classes.heading_25}`}> Content </strong>  - what are the questions about? </p>
                <p data-aos="fade-left"  data-aos-duration="500">· Goals Essay</p>
                <p data-aos="fade-left"  data-aos-duration="500">· Leadership Essays</p>
                <p data-aos="fade-left"  data-aos-duration="500">· Career Progression Essays</p>
                <p data-aos="fade-left"  data-aos-duration="500">· Ethical Dilemma Essays</p>
                <p data-aos="fade-left"  data-aos-duration="500">· Achievements Essays</p>
                <p data-aos="fade-left"  data-aos-duration="500">· Failure Essays</p>
                <p data-aos="fade-left"  data-aos-duration="500">· Situation Essays</p>
              </li>
            </ol>


            <h4 className={`${classes.heading_35}`}>How to write winning Admission Essays</h4>
            <p data-aos="fade-left"  data-aos-duration="500">When the application is to a top MBA program, it becomes important to ensure that your essay gives the edge to your application. With more competition, an admission essay is perhaps the only document that would help you stand out from the many. But what does it all include? How to write a winning essay? </p>
            <p data-aos="fade-left"  data-aos-duration="500">There are no definitive answers to these questions. As many admission essays are based on the question which can vary from university to university, it becomes all the more difficult to answer them. What a student ought to do in such cases is understand the fundamentals of essay writing.</p>
            <p data-aos="fade-left"  data-aos-duration="500">At <b>Your Global Mentors</b>, we have a team of experts who help you in drafting to-the-
              point and world-class Essays</p>


            <h3 className={`${classes.heading_45}`}>Letter of Recommendation (LOR)</h3>


            <p data-aos="fade-left"  data-aos-duration="500">The LOR is a document that provides the admission officers with a comprehensive insight into your suitable candidate for admission into the concerned University. The full form of LOR is a Letter of Recommendation. This letter aims at enabling the Admission officers to gain a clearer and more favourable picture of your experience, achievements, contributions, and skills communicated by the recommender through the recommendation letter.</p>

            <h4 className={`${classes.heading_35}`}>Who needs LOR? Why do they need them?</h4>

            <p data-aos="fade-left"  data-aos-duration="500">An academic letter of recommendation is required by any student going to study abroad. Irrespective of the course (UG, MS, MBA, or Ph.D.) and country, every student requires at least three letters of recommendation from either their college or professional background. For UG, students, LORs can be taken from teachers, professors, school counselors, or principals. For MS students, college professors, internships supervisor, or team lead/ manager from the company they have worked for can issue recommendation letters. For MBA students, LORs should be purely professional, especially if they have an experience of three years or more. For MBA and Ph.D. aspirants who have recently graduated from college, they can ask for recommendation letters from their college professors or project guides.</p>
            <p data-aos="fade-left"  data-aos-duration="500">Provided that almost every application necessitates submission of 2-3 recommendation letters, you must have your recommenders identified and agreed to prepare your letter well in time. Also, don&apos;t underrate the importance of a LOR as it is almost as important as your admission essays, statements of purpose, resume, or any other document for that matter. A Letter of Recommendation is a document that provides credibility to your whole profile as it is a strong support of your profile from experienced and learned professors and persons. While choosing the right recommender, you must remember a few key pointers following which you will end up submitting outstanding LORs to the Admission Committee.</p>



            <h4 className={`${classes.heading_35}`}>Types of LOR</h4>

            <p data-aos="fade-left"  data-aos-duration="500">Letters of Recommendation broadly can be classified into two broad categories based on the Nature of the Recommender. </p>

            <p data-aos="fade-left"  data-aos-duration="500"><b>1. Academic LOR</b></p>
            <p data-aos="fade-left"  data-aos-duration="500">
              A letter of recommendation is provided by a faculty member of your previous institute. Usually, universities ask for you to provide two or three LORs from your previous institute (this could be your teachers from your schools in case of undergraduate courses and professors from your college in case you are applying for masters&apos; programs). The Letter of Recommendation (LOR) Format from Faculty often varies in content and requires the professor to highlight the applicant&apos;s accomplishments as a student of the course. Often, these are more relevant to MS Colleges Abroad or Bachelor Courses abroad.</p>

            <p data-aos="fade-left"  data-aos-duration="500"><b>2. Professional LOR</b></p>
            <p data-aos="fade-left"  data-aos-duration="500">Most of the MBA Colleges Abroad have predefined work experience requirements. Accordingly, they request a Professional Letter of Recommendation from an immediate supervisor. The Professional Letter of Recommendation (LOR) Format from a Supervisor varies from an Academic LOR in terms of some specific content that focuses on the applicant&apos;s ability to work within a team, the exposure to the domain as well as his/her leadership abilities - all necessary to the MBA course applied for. </p>



            <h3 className={`${classes.heading_45}`}>How to write a Recommendation Letter (LOR) </h3>
            <p data-aos="fade-left"  data-aos-duration="500">Unless otherwise specified, a letter of recommendation is a 400-500 word essay that talks about the candidate&apos;s strengths and weaknesses. There are some things you must include in a recommendation letter like the nature of the association as well as the tenure of the association. Apart from that, some basic formats must also be kept in mind. Most universities require this letter to be on the official letterhead. For an Academic LOR - the university&apos;s letterhead is required and for a Professional LOR - the letterhead of the company. What is important to remember in the latter case is that the letterhead should be of the company the recommender is working in. This usually creates a problem if your recommender has moved on to another organisation. Hence, the student must know how to choose the right recommender. </p>


            <p data-aos="fade-left"  data-aos-duration="500">An important point to be kept in mind is that a LOR is not a repetition of an SOP. An ideal LOR is supposed to demonstrate aspects/perspectives of your personality not mentioned either in your SOP or resume. Thus, an ideal recommender knows you well, has personally witnessed the quality of work delivered by you, and readily agreed to provide specific instances of your valued contribution and excellence. A generic LOR is a strict no-no as it does not offer much value to your candidature for the program you are applying to.</p>
            <p data-aos="fade-left"  data-aos-duration="500">You must always remember that the Admission Committee scurries through thousands of applications and yours is one of them. Now, to stand out, focus on including your qualities and accomplishments reinforced by real instances. Another important point here is to endeavour to make all your LORs unique and that can be achieved only if you include unique instances in all the LORs. Making an Impressive Letter of Recommendation is as important as writing a winning SOP. Just keep the formats in place and remember the common mistakes you should avoid in a recommendation letter.</p>
            <p data-aos="fade-left"  data-aos-duration="500">LOR requires a very specific type of understanding and each college has its requirements and formats, at Your Global Mentors we help you acquire all such necessities and also help you in drafting a Letter of Recommendation in the best possible manner. </p>
            <p data-aos="fade-left"  data-aos-duration="500">Resume/CV Writing Tips for Studying Abroad</p>
            <p data-aos="fade-left"  data-aos-duration="500">A Resume or a CV is a summary of your academic and professional qualifications, achievements, contribution, and skills. The full form of the CV is Curriculum Vitae. Your resume casts your first impression on the admission committee and thus, must be designed very carefully and subsequently, critiqued meticulously. There are a few important points that must be kept in mind while drafting a resume which include the content, format, and finally the length of the resume. Although a well-written resume has to clearly define your objective and purpose through its content, it is not a good idea to mention the objective at the start of the resume, as most applicants do. Your objective should reflect in the construction, content, and flow of your resume along with the hierarchy of your qualifications and achievements included in the document. </p>
            <p data-aos="fade-left"  data-aos-duration="500">You must keep in mind that you are one of the few thousand applicants who will apply to that University and thus, your resume is also one of the few thousand resumes the admission committee will go through. Naturally, the admission committee may have just a few seconds to go through your resume and thus, you must ensure that the resume captures the attention of the committee member going through the document in the initial seconds. Also, what holds the most importance is how you endeavour to make your resume look more impressive and comprehensive than the rest. For more information, read Common Errors in a Resume.</p>
            <p data-aos="fade-left"  data-aos-duration="500">While preparing your resume, you must remember that a resume is not an autobiography and should not be approached in that way. You must treat your resume as a comprehensive and focused reference to your academic history, delivered responsibilities, achievements, and academic & professional skills. Finally, the font, spacing, tool usage, etc. should be used in an appropriate manner and alignment with the standard format of an academic resume. More importantly, there is a standard format that an academic resume follows which you should keep in mind. </p>


            <p data-aos="fade-left"  data-aos-duration="500"><b>How to Make an Impressive Academic Resume/ Student CV</b></p>
            <p data-aos="fade-left"  data-aos-duration="500">The most important part of developing an effective and impressive resume is to realise and understand the purpose of creating this document. You need to understand that it is not an autobiography; instead, it is a summary of your professional and academic qualifications and achievements. An undergraduate aspirant must focus on their academic credentials and extra-curricular activities; an MS applicant must emphasise their research interests and breakthroughs; and an MBA aspirant must endeavour to showcase their professional and leadership abilities.</p>
            <p data-aos="fade-left"  data-aos-duration="500">Start by dividing your resume into separate relevant headings like Academic Qualification, Professional Qualification, Projects, Internships, Seminars, Publications, Workshops, Presentations, Achievements, Technical Skills, Extra- Curricular Activities, Honorary Service, Sports Participation, etc. You may even consider segregating your Work Experience into Professional and Entrepreneurial ventures, if applicable.</p>
            <p data-aos="fade-left"  data-aos-duration="500">Also, focusing on prioritisation of content based on your academic or professional profile would further accentuate your resume and make it noteworthy. For example, any quantifiable achievement must be mentioned before a general contribution, and any significant contribution to your team/organisation must be listed in the first half of the resume. </p>
            <p data-aos="fade-left"  data-aos-duration="500">Here are some key pointers that can help you format your resume in a better manner. </p>

            <p data-aos="fade-left"  data-aos-duration="500">· <b>Use bullets</b>  to provide a clean and organised look to your resume. Also, avoid the use of multiple line statements under one bullet point as this leads to overcrowding of the document.</p>
            <p data-aos="fade-left"  data-aos-duration="500">·<b> Mentioning your complete contact information</b> in your resume is an important aspect of developing the document. Ensure to include your full name, and complete address including the street number, city, state, postal code, hand phone number, and email address.</p>
            <p data-aos="fade-left"  data-aos-duration="500">·<b>Format your resume extremely carefully</b> as that is what decides how readable your resume is going to be. The length of the CV must not exceed two pages under any circumstances. The placement of information should be such that all the necessary and relevant information is readily visible to the Committee member going through the CV. Also, ensure that you don&apos;t include information in the form of paragraphs which would cause instant disinterest in the mind of the reader. </p>
            <p data-aos="fade-left"  data-aos-duration="500">· Formatting the resume also holds immense importance in <b> making it presentable.</b> Do not clutter information in the CV and keep them separated using bullets. Use standard fonts such as Times New Roman and a font size of 12. Apply bold and italics whenever necessary to make the headings or any other stand out amongst the rest.</p>
            <p data-aos="fade-left"  data-aos-duration="500">· Mention dates/duration as much as possible and that too, in reverse chronological order. Editing and proofreading hold immense importance in your resume. The admission committee, at any cost, should not come across any misspelt word or mistake in grammar. Usually, a resume is limited to two pages unless specified.</p>
            <p data-aos="fade-left"  data-aos-duration="500">· Last yet the most, know your resume. There should not be anything mentioned in your resume you have less or no idea about.</p>

            <h4 className={`${classes.heading_45}`}>Common Mistakes in a Resume and How to Avoid It</h4>

            <p data-aos="fade-left"  data-aos-duration="500">A resume is essentially a first look into your candidature. While it is important to keep in mind what you should include in your resume, it is essential to keep in mind the common mistakes people make while making their academic resume. Most often, students (especially the ones with work experience) upload the same resume they use for applying for a job. What they need to remember is that an academic resume is different from a professional resume/CV. As such, students must be very careful and not make these common mistakes while preparing the academic resume.</p>



            <p data-aos="fade-left"  data-aos-duration="500">CV plays a vital role in your selection and at <b>Your Global Mentors</b> we are extremely sensitive towards this, we have an expert panel that helps you in drafting a world- class CV so that it can catch the eyes of the admission officer in one shot. </p>





            <h3 className={`${classes.heading_45}`}>Student Visas for Study Abroad</h3>

            <p data-aos="fade-left"  data-aos-duration="500">Student Visas, as the name suggests are visas issued to applicants whose primary purpose of visit to the country is the pursuit of education. Needless to say, while getting admission to the university is extremely important, these legal documents stand in the way of all your pursuits. Every country is governed by its own Immigration Laws. These could vary in terms of the requirements of documents to the different proof of funds acceptable to what all the visas would let you do apart from studying in the country. Also, some broad commonalities are visible in all student visa applications.</p>

            <h4 className={`${classes.heading_45}`}>Documents Required for Student Visa Application</h4>

            <p data-aos="fade-left"  data-aos-duration="500">Every country, depending on their Immigration Laws, has a specific list of documents. However, while the exact requirements are different in terms of actual terms, the list is generic. However, there are two documents that you would require certainly. </p>



            <p data-aos="fade-left"  data-aos-duration="500"><b>VALID PASSPORT</b></p>
            <p data-aos="fade-left"  data-aos-duration="500">This is the primary requisite. While you would need a valid passport, what you need to know is that for different countries, the requirement for the validity of your passport might vary. Some countries would want you to have the validity until the end of the course even at the time of applying for the student visa. Some, on the other hand, might let you apply but request you to have a validity that extends beyond the intended stay in the country.</p>
            <p data-aos="fade-left"  data-aos-duration="500">You also need to ensure that you have at least two blank pages in your passport for stamping for a visa. What is important to note is that in case you have any expired passports, you would still have to submit a copy of all such passports.</p>
            <p data-aos="fade-left"  data-aos-duration="500"><b>PROOF OF A BONAFIDE STUDENT</b></p>
            <p data-aos="fade-left"  data-aos-duration="500">No matter which country you are applying to, if you are applying for any category of Student Visa, you must be able to prove that you are a bona fide student. This is often done by producing confirmation of admission with an educational institute in that country.</p>
            <p data-aos="fade-left"  data-aos-duration="500"><b>FINANCIAL LUCIDITY</b></p>
            <p data-aos="fade-left"  data-aos-duration="500">Most countries would require you to prove that you are capable of not only taking care of the tuition and college expenses but also having the requisite funds to afford your stay in that country for the intended study period. While many countries have a stipulated amount of funds required, some have broader more extensive guidelines. For instance, many countries in Europe (like Germany, Netherlands, etc.) have a minimum living cost computed as per government standards. Students applying for student visas in these countries, accordingly, must provide proof that the said amount is available with them in ready cash. Read more about the Financial Documents Required for Study Abroad Applications. </p>
            <p data-aos="fade-left"  data-aos-duration="500"><b>LANGUAGE PROFICIENCY </b></p>
            <p data-aos="fade-left"  data-aos-duration="500">Another thing that is required perhaps across various countries is proof that you can communicate in the language which would be your medium of instruction. Since most of the students plan to study in English-speaking countries, most of them would require you to provide proof positive that you can communicate in English - both written and verbal. This is usually done by a minimum score requirement for various English Language Tests like TOEFL, IELTS, and/or PTE. Accordingly, if you plan to take up a course in any other language (say German for instance), you would be required to provide certification for that language in accordance with the CEFR Certified Levels.</p>
            <p data-aos="fade-left"  data-aos-duration="500">It is important to note here that while universities might accept different any or either of the above-mentioned tests, for Visas, at times, the requirements are set. For instance, the UK does not recognize TOEFL for Visas. Hence, it is important that before a student writes an English Language Test, he/she checks whether or not the country&apos;s immigration department recognizes that test. Also, Visa Guidelines for different countries usually mandate a minimum score. While Universities might offer admission at a lower score, Visas would be rejected until the minimum standard is met. </p>
            <p data-aos="fade-left"  data-aos-duration="500">The complete list would depend on the country you are applying to. While some countries would require medical proof, some might require a blocked account. Many countries also require an SOP.</p>
            <p data-aos="fade-left"  data-aos-duration="500">The complete list of documents will be provided by our Expert team at <b>Your Global Mentors</b> will be with you throughout this process</p>



            <h3 className={`${classes.heading_45}`}>Education Loans</h3>

            <p data-aos="fade-left"  data-aos-duration="500"><b>Indian Banks Offering Education Loans for Studying Abroad</b></p>
            <p data-aos="fade-left"  data-aos-duration="500">Studying abroad can be a life-changing decision, however, this doesn&apos;t come easy. Those who want to pursue higher studies abroad, but find it difficult to arrange for funds, now have the option to make arrangements for funding their education. In this article, we&apos;ll cover every detail related to education, be it the process to apply for a loan, eligibility, or the documents required for it. We&apos;ll also cover various other aspects related to student loans like the Indian banks giving student loans or the role of a guarantor. </p>


            <h4 className={`${classes.heading_45}`}>Eligibility criteria to apply for the education loan</h4>


            <p data-aos="fade-left"  data-aos-duration="500">The first and foremost thing is to check whether you are eligible to apply for an education loan or not. Below provided is the usual criteria which Indian banks follow for checking the eligibility of the loan applicant is:</p>
            <p data-aos="fade-left"  data-aos-duration="500">- The applicant should be a citizen of India.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- The applicant must have attained the age of 18 else his/her parents will have to take the loan.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- The applicant must have a good academic background.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- The applicant must have secured admission at a recognized foreign university/institution/college.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- The desired course that the applicant is going to study must be a technical or professional one, as banks give preference to job-oriented courses.</p>




            <h3 className={`${classes.heading_45}`}>Documents required for applying for an education loan</h3>

            <p data-aos="fade-left"  data-aos-duration="500">Before applying for an education loan, the applicant must be completely aware of the documents required to apply for a student loan. The following documents are required to apply for an education loan:</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Filled application form</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Photographs: Passport-size photographs of the applicant and the co-applicant.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Photo ID: Photo ID of the applicant and the co-applicant. It can be a PAN card, driving licence, Voter ID card, Aadhar card, or Passport.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Residence proof: Resident proof of the applicant and the co-applicant</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Academic documents:</p>
            <p data-aos="fade-left"  data-aos-duration="500">o Mark sheet and certificates of the applicant</p>
            <p data-aos="fade-left"  data-aos-duration="500">o Mark sheet (Score Report) of GRE, GMAT, TOEFL, IELTS, etc. whichever is applicable</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Admission proof: Admission letter shared by the university or college.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Bank statements: Last six months&apos; bank statements of the co-applicant</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Income proof: Income proof of the co-applicant</p>
            <p data-aos="fade-left"  data-aos-duration="500">- In the case of collateral (immovable property), it can be flat, home, or non-agriculture land the following documents are required:</p>
            <p data-aos="fade-left"  data-aos-duration="500">o Property title deed</p>
            <p data-aos="fade-left"  data-aos-duration="500">o Building approved plan</p>
            <p data-aos="fade-left"  data-aos-duration="500">o NOC for a mortgage from a builder or society </p>
            <p data-aos="fade-left"  data-aos-duration="500"><b>NOTE: These requirements can vary as per the banks&apos; regulations.</b></p>

            <p data-aos="fade-left"  data-aos-duration="500"> For More Details About Education Loan Providers click on ...</p>


            <h3 className={`${classes.heading_45}`}>Loan Application Process</h3>


            <p data-aos="fade-left"  data-aos-duration="500">From loan application to approval and disbursement, the entire loan process is time taking, so it is always advisable to apply for a loan a little early. Follow these steps for applying for a student loan:</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Check whether the course which you are going to study is recognized by the banks or not.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Figure out how much loan amount you require and how much you are going to arrange on your own.</p>
            <p data-aos="fade-left"  data-aos-duration="500">-        Compare the student loan provided by different banks for studying abroad and go for the one which caters best to your needs.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- After finalising the bank and the loan amount, fill out the loan application form and approach your bank.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- As soon as your loan is approved, the bank will issue a loan document that includes various elements of the loan.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- After signing the loan document, the bank will disburse the amount in instalments or as asked by the university.</p>



            <h3 className={`${classes.heading_45}`}>Things to Remember</h3>


            <p data-aos="fade-left"  data-aos-duration="500" ><b>Moratorium period:</b> This is the time period during which the borrower need not make any repayment to the bank. This period varies from bank to bank and could last up to sometime after completion of the course.</p>
            <p data-aos="fade-left"  data-aos-duration="500"><b>Loan Margin:</b> Usually, banks do not provide the complete amount i.e. 100 percent money needed to fund the education. The majority of the public sector banks issue 90% of the total amount, the remaining 10% has to be arranged by the aspirant himself.  </p>
            <p data-aos="fade-left"  data-aos-duration="500"><b>Effect of Exchange Rate:</b> Always calculate the amount which you will be receiving at the time of disbursement, as any change in the exchange rate can affect the amount you will be receiving.</p>




            <h3 className={`${classes.heading_45}`} >Collateral Rules</h3>

            <p data-aos="fade-left"  data-aos-duration="500"><b><u>What is Collateral?</u></b></p>

            <p data-aos="fade-left"  data-aos-duration="500">Any property whether movable or immovable, which can be offered to a bank as a security for a loan is collateral. Most Indian banks demand collateral as security to reduce the risk involved in paying off the credit.</p>

            <p data-aos="fade-left"  data-aos-duration="500"><b>Type of instruments accepted as collateral: </b>Any liquid asset preferably shares, bonds, FD, or any immovable property like a house, any commercial property, or land can be classified as collateral. One important point to keep in mind is that agricultural land is not accepted as collateral. Even mutual fund units, gold, life insurance policy, government securities, shares, bonds, bank deposits, debentures, or bank deposits are also accepted as collateral.</p>
            <p data-aos="fade-left"  data-aos-duration="500"><b>Education loan without collateral:</b> Education loan has come as a big relief to those who want to pursue quality education but face a big challenge while arranging the funds. Now students can avail of a loan of up to INR 4 lakhs without collateral. For loans, up to INR 7.5 lacs, parents or guardians are made joint borrowers and a third- party guarantee is obtained. For a loan exceeding INR 7.5 lacs property or any other asset is required as collateral.</p>
            <p data-aos="fade-left"  data-aos-duration="500"><b>How much can you borrow against any collateral?</b></p>
            <p data-aos="fade-left"  data-aos-duration="500">- If you want to take the loan with your immovable property as collateral, in that case, the bank&apos;s representative will verify your property and prepare a report on whether it can be mortgaged or not.</p>
            <p data-aos="fade-left"  data-aos-duration="500">- Also, the bank&apos;s representative will evaluate your property. Based on this report, the loan amount will be approved.</p>


            <h3 className={`${classes.heading_45}`}>Role of a Guarantor</h3>
            <p data-aos="fade-left"  data-aos-duration="500">Becoming a guarantor for a loan is a huge responsibility as the guarantor will have a legal obligation to pay in case the borrower defaults on his payment. If the loan amount exceeds INR 4 lakhs, then the bank may ask for a guarantee from a third party. If the borrower is not able to repay the loan amount irrespective of the circumstances, in that case, the guarantor holds the liability to repay the complete amount to banks. </p>
            <h3 className={`${classes.heading_45}`}>Read the agreement carefully</h3>
            <p data-aos="fade-left"  data-aos-duration="500">This is one of the most important aspects to look after while taking a loan. We always suggest you go through the terms and conditions of the loan carefully and then move ahead with it. This is one factor we stress, as you should always be clear about all the conditions mentioned in the loan agreement. If you have any doubt regarding anything then always consult the experts apart from the bank representative.</p>
            <p data-aos="fade-left"  data-aos-duration="500">At <b> Your Global Mentors</b>, we have collaborated with a few of the nationalised banks & specialised financial institutions to help you sail in this process as well.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Document