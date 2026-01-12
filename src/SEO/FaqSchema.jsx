import Schema from "./Schema";

export default function FaqSchema() {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué pasa si no tengo SG-SST?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Puedes exponerte a sanciones y aumentar el riesgo de accidentes. Sinergia te acompaña con ruta clara y evidencias listas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tarda implementar?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Depende del tamaño y el nivel de avance. Se construye una base sólida y luego se mantiene con seguimiento.",
        },
      },
      {
        "@type": "Question",
        name: "¿Trabajan con pymes?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Sí. Hacemos el SG-SST práctico y sostenible para pymes, con acompañamiento paso a paso.",
        },
      },
    ],
  };

  return <Schema json={json} />;
}
