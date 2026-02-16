import { createGDSIcon } from "../create-icon";

const inner = `<path d="M13 5H19M19 5V11M19 5L5 19M11 19H5M5 19V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MoveDiagonalIcon = createGDSIcon(
  "MoveDiagonalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
