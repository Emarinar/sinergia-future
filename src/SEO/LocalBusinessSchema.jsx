import Schema from "./Schema";

export default function LocalBusinessSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sinergia Consultoría SGI",
    url: "https://sinergiasgi.com/",
    telephone: "+57 3147204124",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressRegion: "Antioquia",
      addressCountry: "CO",
    },
    areaServed: "CO",
    sameAs: [
      "https://www.instagram.com/sinergiasgi/",
      "https://www.facebook.com/profile.php?id=61578121284838#",
    ],
    description:
      "Consultoría en SG-SST, Seguridad Social y PESV en Colombia. Implementación, seguimiento, evidencias y auditoría.",
  };

  return <Schema json={json} />;
}
