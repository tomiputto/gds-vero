import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 20H20M6 16L12 4L18 16M8 12H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const BaselineIcon = createGDSIcon(
  "BaselineIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
