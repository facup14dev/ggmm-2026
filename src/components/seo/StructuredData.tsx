import {
  areas,
} from "../../data/sections";

const SITE_URL =
  "https://ggmm.com.ar";

function StructuredData() {
  const data = {
    "@context":
      "https://schema.org",

    "@type": "ItemList",

    "@id":
      `${SITE_URL}/#areas-list`,

    name:
      "Áreas y módulos de GGMM",

    description:
      "Áreas de gestión disponibles dentro de la plataforma GGMM para gobiernos municipales.",

    numberOfItems:
      areas.length,

    itemListElement:
      areas.map(
        (area, index) => ({
          "@type": "ListItem",

          position:
            index + 1,

          item: {
            "@type":
              "SoftwareApplication",

            name:
              area.title,

            description:
              area.description,

            applicationCategory:
              "BusinessApplication",

            operatingSystem:
              "Web",

            isPartOf: {
              "@id":
                `${SITE_URL}/#software`,
            },

            featureList:
              area.modules,
          },
        }),
      ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(data),
      }}
    />
  );
}

export default StructuredData;
