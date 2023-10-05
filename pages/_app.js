import '../styles/globals.css'
import '../styles/about.css'
import '../styles/slider.css'
import '../styles/blog.css'
import '../styles/college.css'
import '../styles/popupform.css'
import '../components/SignUp/signUp.css';
import '../components/UserProfile/userProfile.css';
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/Layout';
import "remixicon/fonts/remixicon.css"
import "../styles/terms.module.css"
import "../styles/form.css"
import "../styles/header.css"
import { ToastContainer } from 'react-toastify'
import Router from 'next/router'
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import Loader from "../components/Loader"
import Head from "next/head";
import Script from "next/script";
import Enquiry from "../components/Enquiry"
import Modal from 'react-bootstrap/Modal';
import ContactForm from '../components/ContactForm'
import WhatsappButton from '../components/WhatsappButton'
import ScrollTopButton from '../components/ScrollTopButton'
import AOS from 'aos';
import 'aos/dist/aos.css';
import SignUp from '../components/SignUp'
import { Provider } from 'react-redux';
import { store } from '../redux/store'
import "bootstrap-icons/font/bootstrap-icons.css"

function MyApp({ Component, pageProps }) {

  const [Loading, setLoading] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })

  // Enquiry Button
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }
  useEffect(() => {
    AOS.init();
  }, [])
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    require("bootstrap/dist/js/bootstrap.bundle")
  }, []);
  return <>
    <Provider store={store}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />




        {/* UA UNIVERSAL ANALYTICS */}
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-261815341-1"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z16S82V4XL');
          `,
          }}
        ></script>

      </Head>
      <Script  src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous" async></Script>
      <Script  src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous" async></Script>
      <Script  src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous" async></Script>
      {/* Google Tag Manager */}
      <Script id='gooogleTagManager' strategy="afterInteractive" dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W629RRD');`}}>

      </Script>
      {/* End Google Tag Manager */}
      <Layout>
        {Loading && <Loader />}

        <Enquiry setOpen={handleShow} />
        <Component {...pageProps} />
        <ToastContainer position="top-right" limit={1} />
        <Modal show={show} onHide={handleClose}>
          <ContactForm onCloseModel={handleClose} />
        </Modal>
        <WhatsappButton />
        <ScrollTopButton />
      </Layout>
      {/* Google Tag Manager (noscript)  */}
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W629RRD"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}>

      </noscript>
      {/* End Google Tag Manager (noscript) */}

      {/* <!-- Meta Pixel Code --> */}
      <Script id='metaPixel' strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1532572690560097');
        fbq('track', 'PageView');`}}>
      </Script>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1532572690560097&ev=PageView&noscript=1"
      />`}}>
      </noscript>
      {/* <!-- End Meta Pixel Code --> */}

      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z16S82V4XL"></script>
      <Script
        id='googleTag'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
  
          gtag('config', 'G-Z16S82V4XL');`}}>
      </Script>
    </Provider>
  </>
}

export default MyApp
