import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3.5 21L14 3M20.5 21L10 3M15.5 21L12 15L8.5 21M2 21H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TentIcon = createGDSIcon(
  "TentIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
