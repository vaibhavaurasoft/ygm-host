import Link from "next/link";
import Blog from "../components/Blog";
import HomeSlider from "../components/HomeSlider"
import Testiminials from "../components/Testimonials"
import AssociatedInstitutions from "../components/AssociatedInstitutions"
import Videos from "../components/Videos";
import TopCollege from "../components/TopCollege";
import LatestNews from "../components/LatestNews"
import TopCities from "../components/TopCities"
import DownTabs from "../components/DownTabs";

import ExploreyourFuture from "../components/ExploreyourFuture"
import TopExams from "../components/TopExams";

// import 

import AOS from 'aos';
import 'aos/dist/aos.css';
// import { useEffect } from "react";
import SEOHeadComponent from "../components/SEOHeadComponent";
import { useEffect } from "react";


function Home({ videos, LogosData, TestimonialsData, BlogData, LatestNewsData, CitiesData, ExploreCategory, Exams }) {
  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      <HomeSlider />
      
      <LatestNews data={LatestNewsData.news} />
      <DownTabs />
      <SEOHeadComponent title="Information of best colleges in India with fees, placement, exam, result" metaContent=" The best colleges in India include IIT Chennai, Christ University(Bangalore) for BBA & BCA, IIT (Delhi) for Science Courses & SRCC, Delhi for Commerce" h1=' Best Colleges in India with their specialized courses' />
      <ExploreyourFuture ExploreCategory={ExploreCategory} />
      <TopCities CitiesData={CitiesData} />
      <TopCollege data={ExploreCategory.CollegeCategoryData} />
      <TopExams data={Exams} />
      <Videos data={videos} />
      <AssociatedInstitutions data={LogosData} />
      <Testiminials data={TestimonialsData} />
      <Blog data={BlogData} />
    </>
  );
}

export async function getServerSideProps() {

  // featching Api for Video Componenet 
  let videoRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_videos.php?page=home`)
  const VideoData = await videoRes.json();

  // featching Api for AssociatedInstitutions Componenet 
  let logosRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_colleges.php?no_pagination`)
  const LogosData = await logosRes.json();

  // featching Api for Testiminials Componenet 
  let TestimonialsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_testimonials.php`)
  const TestimonialsData = await TestimonialsRes.json();

  // featching Api for Testiminials Componenet 
  let LatestNews = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_news_feeds.php`)
  const LatestNewsData = await LatestNews.json();

  // featching Api for BlogData  Componenet 
  let BlogData = [];
  try {
    let BlogRes = await fetch(`${process.env.NEXT_PUBLIC_BLOG_API_URL}/wp-content/themes/astra/get_three_blogs.php`)
    BlogData = await BlogRes.json();
  } catch (error) {
    console.log('error', error);
  }

  // featching Api for TopCitiesData  Componenet 
  let TopCitiesData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_cities.php?limit=${process.env.TOP_CITIES_NUMBER_ON_SLIDER || 7}`)
  const CitiesData = await TopCitiesData.json();

  // featching Api for CollegeCategory  Componenet 
  let CollegeCategory = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_college_category.php?type=1&no_pagination`)
  const CollegeCategoryData = await CollegeCategory.json();

  // featching Api for CollegeCategory  Componenet 
  let UG_Exams = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_exam_categories.php?type=1&no_pagination`)
  const UG_Exams_Data = await UG_Exams.json();

  // featching Api for CollegeCategory  Componenet 
  let PG_Exams = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_exam_categories.php?type=2&no_pagination`)
  const PG_Exams_Data = await PG_Exams.json();

  // featching Api for CollegeCategory  Componenet 
  let ExamCategory = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get_exam_categories.php?no_pagination`)
  const Exams = await ExamCategory.json();

  return {
    props: {
      videos: VideoData,
      LogosData: LogosData,
      TestimonialsData: TestimonialsData,
      BlogData: BlogData,
      LatestNewsData: LatestNewsData,
      CitiesData: CitiesData,
      ExploreCategory: { CollegeCategoryData, UG_Exams_Data, PG_Exams_Data },
      Exams: Exams
    }
  };
}

export default Home;
