import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3.5 13H9.5M2 16L6.5 7L11 16M18 7V16M18 16L14 12M18 16L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const AArrowDownIcon = createGDSIcon(
  "AArrowDownIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
