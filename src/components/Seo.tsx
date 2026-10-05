import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const Seo = ({
  title,
  description,
  keywords,
  url = "https://zoidics.com/",
  image = "https://zoidics.com/og-image.png",
}: SEOProps) => {
  const fullTitle = title
    ? `${title} | Zoidics Software Service`
    : "Zoidics Software Service | Web & App Development";

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{fullTitle}</title>

      <meta name="description" content={description} />

      {keywords && <meta name="keywords" content={keywords} />}

      <meta name="author" content="Zoidics Software Service" />

      <meta name="robots" content="index, follow" />

      {/* Canonical */}
      <link rel="canonical" href={url} />

      {/* Theme */}
      <meta name="theme-color" content="#7c3aed" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />

      <meta property="og:url" content={url} />

      <meta property="og:title" content={fullTitle} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={image} />

      <meta property="og:site_name" content="Zoidics Software Solutions" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={fullTitle} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
