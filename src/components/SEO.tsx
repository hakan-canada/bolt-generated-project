import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Anatolia Mosque - North York's Islamic Center | Prayer Times & Community Services",
  description = "Welcome to Anatolia Mosque, North York's premier Islamic center. Join us for daily prayers, Jumu'ah, and community events. Located at 73 Alness St, serving the Muslim community in Toronto.",
  image = "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f",
  url = "https://anatoliamosque.com"
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="mosque north york, islamic center toronto, muslim prayer times, jumu'ah prayer toronto, anatolia mosque, muslim community north york" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
