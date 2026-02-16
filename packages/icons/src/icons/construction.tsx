import { createGDSIcon } from "../create-icon";

const inner = `<path d="M17 14V21M7 14V21M17 3V6M7 3V6M10 14L2.3 6.3M14 6L21.7 13.7M8 6L16 14M3 6H21C21.5523 6 22 6.44772 22 7V13C22 13.5523 21.5523 14 21 14H3C2.44772 14 2 13.5523 2 13V7C2 6.44772 2.44772 6 3 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ConstructionIcon = createGDSIcon(
  "ConstructionIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
