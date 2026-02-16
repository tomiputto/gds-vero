import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 16L7 20M7 20L11 16M7 20V4M11 4H15M11 8H18M11 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowDownNarrowWideIcon = createGDSIcon(
  "ArrowDownNarrowWideIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
