import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 8L7 4M7 4L11 8M7 4V20M11 12H15M11 16H18M11 20H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowUpNarrowWideIcon = createGDSIcon(
  "ArrowUpNarrowWideIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
