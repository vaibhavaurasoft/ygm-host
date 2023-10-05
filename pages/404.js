import Link from "next/link"
import SEOHeadComponent from "../components/SEOHeadComponent"
function PageNotFound() {
    return <section className="page-404">
        <SEOHeadComponent title='404 Page not found.'/>
        <div className="container">
            <div className="bg-404">
                <h2 className="text_404 mt-0 pt-4">404</h2>
            </div>
        </div>
        <h2 className="main-heading  mt-0">Oops&#33; Look like your lost</h2>
        <h6 className="text-center">The page you are looking for not available&#33;</h6>
        <div className="backtohome">
            <button className="btn homebtn" > <Link href="/"> Back To Home</Link></button>
        </div>
    </section>
}
export default PageNotFound