import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 10L5.5 7.5L3 5M3 19L5.5 16.5L3 14M10 6H21M10 12H21M10 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ListCollapseIcon = createGDSIcon(
  "ListCollapseIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
