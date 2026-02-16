import { createGDSIcon } from "../create-icon";

const inner = `<path d="M5 3V19M5 3L2 6M5 3L8 6M5 19H21M5 19L11 13M21 19L18 16M21 19L18 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Move3dIcon = createGDSIcon(
  "Move3dIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
