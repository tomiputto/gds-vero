import { createGDSIcon } from "../create-icon";

const inner = `<path d="M21 4H3M18 8H6M19 12H9M16 16H10M11 20H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TornadoIcon = createGDSIcon(
  "TornadoIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
