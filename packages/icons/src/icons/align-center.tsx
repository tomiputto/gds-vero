import { createGDSIcon } from "../create-icon";

const inner = `<path d="M21 6H3M17 12H7M19 18H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const AlignCenterIcon = createGDSIcon(
  "AlignCenterIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
