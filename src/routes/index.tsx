import { createFileRoute } from "@tanstack/react-router";
import { HomeHub } from "@/components/home-hub";

const TITLE = "consolecheat · PSN avatars, codes and title IDs";
const DESCRIPTION =
  "Free PlayStation Network tools. Add PSN avatars to the official cart, redeem avatar codes, and look up PS4 and PS5 title IDs. Not Sony.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "consolecheat",
      url: "https://consolecheat.com/",
      description: DESCRIPTION,
      inLanguage: ["en", "de"],
    },
    {
      "@type": "ItemList",
      name: "PSN tools",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "PSN Avatar Adder",
          url: "https://avatar.consolecheat.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "PSN Codes",
          url: "https://codes.consolecheat.com/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "PlayStation Title ID Finder",
          url: "https://title-id-finder.consolecheat.com/",
        },
      ],
    },
  ],
};

export const Route = createFileRoute("/")({
  component: HomeHub,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://consolecheat.com/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://consolecheat.com/og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://consolecheat.com/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
});

