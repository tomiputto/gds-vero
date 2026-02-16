import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 21V14M4 10V3M12 21V12M12 8V3M20 21V16M20 12V3M2 14H6M10 8H14M18 16H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SlidersVerticalIcon = createGDSIcon(
  "SlidersVerticalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
