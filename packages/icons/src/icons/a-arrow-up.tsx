import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3.5 13H9.5M2 16L6.5 7L11 16M18 16V7M18 7L14 11M18 7L22 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const AArrowUpIcon = createGDSIcon(
  "AArrowUpIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
