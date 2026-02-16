import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 9H20M4 15H20M10 3L8 21M16 3L14 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const HashIcon = createGDSIcon(
  "HashIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
