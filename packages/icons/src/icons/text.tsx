import { createGDSIcon } from "../create-icon";

const inner = `<path d="M17 6.09998H3M21 12.1H3M15.1 18H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TextIcon = createGDSIcon(
  "TextIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
