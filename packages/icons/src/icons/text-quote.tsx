import { createGDSIcon } from "../create-icon";

const inner = `<path d="M17 6H3M21 12H8M21 18H8M3 12V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TextQuoteIcon = createGDSIcon(
  "TextQuoteIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
