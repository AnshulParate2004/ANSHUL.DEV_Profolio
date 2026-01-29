import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
}

const SEO = ({
    title,
    description,
    keywords = "Anshul Parate, Full-Stack Developer, Generative AI, React, FastAPI, MongoDB, Qdrant, Neo4j, Vector Database, AI Developer, AGNETICT AI, Machine Learning",
    image = "/og-image.png", // Assuming a default OG image exists or will be added, otherwise browser will ignore or use favicon if not set
    url = window.location.href,
    type = 'website'
}: SEOProps) => {
    const siteTitle = "Anshul Parate | Full-Stack & Generative AI Developer";

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title} | Anshul Parate</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
