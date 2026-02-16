import { createGDSIcon } from "../create-icon";

const inner = `<path d="M16 3H19V21H16M8 21H5V3H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const BracketsIcon = createGDSIcon(
  "BracketsIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
