import { Helmet } from "react-helmet-async";

export const lodgingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://www.negicottage.in/#business",
  name: "Negi Cottage",
  alternateName: "Negi Cottage Home Stay",
  url: "https://www.negicottage.in/",
  image: "https://www.negicottage.in/images/negi-cottage-cover.png",
  telephone: "+917807215761",
  priceRange: "₹1,500 - ₹3,000",
  checkinTime: "12:00",
  checkoutTime: "11:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kuppa Bus Stand, Kupa",
    addressLocality: "Kupa",
    addressRegion: "Himachal Pradesh",
    postalCode: "172106",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.4333,
    longitude: 78.2667,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "279",
    bestRating: "5",
  },
};

export default function BusinessSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(lodgingBusinessSchema)}
      </script>
    </Helmet>
  );
}

