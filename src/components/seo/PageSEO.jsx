import React from 'react';
import { Helmet } from 'react-helmet-async';

export function PageSEO({ 
  title, 
  description, 
  canonicalPath, 
  type = 'website',
  schema,
  noindex = false
}) {
  const siteName = 'Wavefront Academy';
  const baseUrl = 'https://wavefrontacademy.web.app';
  const fullCanonical = canonicalPath ? `${baseUrl}${canonicalPath}` : baseUrl;

  // Don't append siteName if the title already includes it or is very specific
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Canonical and Robots */}
      <link rel="canonical" href={fullCanonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={`${baseUrl}/walogo.png`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}/walogo.png`} />

      {/* Structured Data (Schema) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
