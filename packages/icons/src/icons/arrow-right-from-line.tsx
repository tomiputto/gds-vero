import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 5V19M21 12H7M21 12L15 18M21 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowRightFromLineIcon = createGDSIcon(
  "ArrowRightFromLineIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
