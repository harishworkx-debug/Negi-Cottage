import { Helmet } from "react-helmet-async";
import type { ReactNode } from "react";

export const SITE_URL = "https://www.negicottage.in";

export interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
  children?: ReactNode;
}

export default function SEO({
  title,
  description,
  path = "/",
  image = "/images/negi-cottage-cover.png",
  noindex = false,
  children,
}: SEOProps) {
  // Safe canonical URL construction
  const canonical = path.startsWith("http")
    ? path
    : new URL(path, SITE_URL).href;

  // Safe image URL construction
  const imageUrl = image.startsWith("http")
    ? image
    : new URL(image, SITE_URL).href;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <link rel="canonical" href={canonical} />

      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Negi Cottage" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {children}
    </Helmet>
  );
}

