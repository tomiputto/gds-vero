import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 4V20M4 20H20M4 20L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Axis3dIcon = createGDSIcon(
  "Axis3dIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
