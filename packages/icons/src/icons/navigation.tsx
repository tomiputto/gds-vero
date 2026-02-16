import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 11L22 2L13 21L11 13L3 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const NavigationIcon = createGDSIcon(
  "NavigationIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
