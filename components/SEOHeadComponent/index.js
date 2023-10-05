import Head from 'next/head';
export default function SEOHeadComponent({ title = 'Get Your College', metaContent = '', h1 }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={metaContent} />
            </Head>
            {h1 &&
                <div className='container mt-4'>
                    <h1 className="animate_charcter"> {h1}</h1>
                </div>
            }
        </>
    )
}