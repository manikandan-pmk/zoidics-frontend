import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://zoidics.com";
const BRAND = "Zoidics";

interface SEOProps {
  title?: string;
  description: string;
  keywords?: string;
  url?: string; // full URL; if omitted, it is built from the current path
  image?: string;
  noindex?: boolean; // use on 404 or private pages
  schema?: object; // optional page-specific JSON-LD
}

const Seo = ({
  title,
  description,
  keywords,
  url,
  image = `${SITE_URL}/og-image.png`,
  noindex = false,
  schema,
}: SEOProps) => {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "") || "/";
  const canonical = url ?? `${SITE_URL}${path === "/" ? "/" : path}`;

  // Never repeat the brand: only append it if the title doesn't already contain it
  const fullTitle = !title
    ? `${BRAND} | AI, Web & App Development in Chennai`
    : title.toLowerCase().includes("zoidics")
    ? title
    : `${title} | ${BRAND}`;

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