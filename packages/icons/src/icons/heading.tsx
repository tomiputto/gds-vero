import { createGDSIcon } from "../create-icon";

const inner = `<path d="M6 12H18M6 20V4M18 20V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const HeadingIcon = createGDSIcon(
  "HeadingIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
