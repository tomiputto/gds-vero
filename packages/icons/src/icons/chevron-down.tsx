import { createGDSIcon } from "../create-icon";

const inner = `<path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChevronDownIcon = createGDSIcon(
  "ChevronDownIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
