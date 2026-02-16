import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 2C11 2 13 4 16 4C19 4 20 3 20 3V14M4 22V4M4 15C4 15 5 14 8 14C11 14 13 16 16 16M2 2L22 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FlagOffIcon = createGDSIcon(
  "FlagOffIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
