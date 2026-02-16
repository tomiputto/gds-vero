import { createGDSIcon } from "../create-icon";

const inner = `<path d="M7 7L17 17M17 17V7M17 17H7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowDownRightIcon = createGDSIcon(
  "ArrowDownRightIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
