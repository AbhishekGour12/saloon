// src/app/layout.js
import "./globals.css";
import "./common.css";
import "swiper/css";
import "swiper/css/pagination";

export const metadata = {
  title: "Nikkisha's Unisex Salon & Spa | World-Class Luxury Salon Indore",
  description: "Experience world-class luxury beauty, hair couture, and skin rituals at Nikkisha's Unisex Salon & Spa, Indore's premier luxury salon. Book your VIP session today.",
  keywords: "luxury salon indore, premium unisex salon, celebrity hair stylist indore, bridal makeup indore, premium spa indore, nail art salon, Nikkisha salon indore",
  openGraph: {
    title: "Nikkisha's Unisex Salon & Spa | World-Class Luxury Salon",
    description: "Welcome to Indore's premium sanctuary of style and rejuvenation. Unleash your inner glamour with bespoke styling, hair art, and aesthetic facials.",
    url: "https://saloon-nine-ivory.vercel.app",
    siteName: "Nikkisha's Unisex Salon & Spa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Nikkisha's Luxury Salon Interior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Nikkisha's Unisex Salon & Spa",
    "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "@id": "https://saloon-nine-ivory.vercel.app/#salon",
    "url": "https://saloon-nine-ivory.vercel.app",
    "telephone": "+919876543210",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "101, Near Vijay Nagar Square, AB Road",
      "addressLocality": "Indore",
      "addressRegion": "MP",
      "postalCode": "452010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.7533,
      "longitude": 75.8937
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/nikkishasalon",
      "https://www.instagram.com/nikkishasalon"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
