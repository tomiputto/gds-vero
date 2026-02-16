import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 19V5M13 6L7 12M7 12L13 18M7 12H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowLeftToLineIcon = createGDSIcon(
  "ArrowLeftToLineIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
