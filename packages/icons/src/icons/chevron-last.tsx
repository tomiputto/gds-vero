import { createGDSIcon } from "../create-icon";

const inner = `<path d="M7 18L13 12L7 6M17 6V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChevronLastIcon = createGDSIcon(
  "ChevronLastIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
