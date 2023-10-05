import Image from 'next/image'
import classes from './banner.module.css'
export default function TopBanner({ imagPath,alt }) {
    return (
        <section className={`${classes.banner_section}`}>
            <Image loader={() => imagPath}  src={imagPath} width="1920" height="620" alt={alt}></Image>
        </section >
    )
}