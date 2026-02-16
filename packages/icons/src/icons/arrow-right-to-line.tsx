import { createGDSIcon } from "../create-icon";

const inner = `<path d="M17 12H3M17 12L11 18M17 12L11 6M21 5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowRightToLineIcon = createGDSIcon(
  "ArrowRightToLineIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
