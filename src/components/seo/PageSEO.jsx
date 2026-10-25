import React from 'react';
import { Helmet } from 'react-helmet-async';

export function PageSEO({ 
  title, 
  description, 
  canonicalPath, 
  type = 'website',
  schema,
  breadcrumbs,
  image = '/walogo.png',
  noindex = false
}) {
  const siteName = 'Wavefront Academy';
  const baseUrl = 'https://wavefrontacademy.web.app';
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image.startsWith('/') ? image : `/${image}`}`;

  // Normalize canonicalPath: ensure single authoritative path without query params or hash
  const cleanPath = canonicalPath ? canonicalPath.split('?')[0].split('#')[0] : '';
  const normalizedPath = cleanPath === '/' || cleanPath === '' ? '' : cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
  const fullCanonical = `${baseUrl}${normalizedPath}`;

  // Case-insensitive check to prevent duplicating "| Wavefront Academy"
  const hasBrand = title.toLowerCase().includes(siteName.toLowerCase());
  const fullTitle = hasBrand ? title : `${title} | ${siteName}`;

  // Generate BreadcrumbList structured data if breadcrumbs array is provided
  // breadcrumbs format: [{ name: 'Home', path: '/' }, { name: 'Programs', path: '/programs' }]
  const breadcrumbSchema = (breadcrumbs && breadcrumbs.length > 0) ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, idx) => {
      const crumbCleanPath = crumb.path ? crumb.path.split('?')[0].split('#')[0] : '';
      const crumbNormalized = crumbCleanPath === '/' || crumbCleanPath === '' ? '' : crumbCleanPath.startsWith('/') ? crumbCleanPath : `/${crumbCleanPath}`;
      return {
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": `${baseUrl}${crumbNormalized}`
      };
    })
  } : null;

  // Collect schemas into an array to render
  const schemasToRender = [];
  if (schema) {
    if (Array.isArray(schema)) {
      schemasToRender.push(...schema);
    } else {
      schemasToRender.push(schema);
    }
  }
  if (breadcrumbSchema) {
    schemasToRender.push(breadcrumbSchema);
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
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
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Structured Data (Schema) */}
      {schemasToRender.map((s, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
