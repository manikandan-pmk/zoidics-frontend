import { Helmet } from "react-helmet-async";

const SITE_URL = "https://zoidics.com";
const BRAND = "Zoidics Software Solutions";

interface SEOProps {
  title?: string;
  description: string;
  keywords?: string;
  url?: string; // full URL; if omitted, it is built from the current path
  image?: string;
  noindex?: boolean; // use on 404 or private pages
  schema?: object; // optional page-specific JSON-LD
}

const getDefaultUrl = () => {
  if (typeof window === "undefined") return `${SITE_URL}/`;
  const path = window.location.pathname.replace(/\/+$/, "");
  return `${SITE_URL}${path || "/"}`;
};

const Seo = ({
  title,
  description,
  keywords,
  url,
  image = `${SITE_URL}/og-image.png`,
  noindex = false,
  schema,
}: SEOProps) => {
  const canonical = url ?? getDefaultUrl();
  const fullTitle = title
    ? `${title} | ${BRAND}`
    : `${BRAND} | Web & App Development`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={BRAND} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={canonical} />
      <meta name="theme-color" content="#7c3aed" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={BRAND} />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default Seo;