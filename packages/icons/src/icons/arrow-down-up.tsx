import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 16L7 20M7 20L11 16M7 20V4M21 8L17 4M17 4L13 8M17 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowDownUpIcon = createGDSIcon(
  "ArrowDownUpIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
