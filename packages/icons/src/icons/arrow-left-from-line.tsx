import { createGDSIcon } from "../create-icon";

const inner = `<path d="M9 6L3 12M3 12L9 18M3 12H17M21 19V5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowLeftFromLineIcon = createGDSIcon(
  "ArrowLeftFromLineIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
