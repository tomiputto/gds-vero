import { createGDSIcon } from "../create-icon";

const inner = `<path d="M7 8L3 12L7 16M21 12H11M21 6H11M21 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const IndentDecreaseIcon = createGDSIcon(
  "IndentDecreaseIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
