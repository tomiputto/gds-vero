import { createGDSIcon } from "../create-icon";

const inner = `<path d="M9 4V20M4 7C4 5.3 5.3 4 7 4H20M18 20C16.3 20 15 18.7 15 17V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const PiIcon = createGDSIcon(
  "PiIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
