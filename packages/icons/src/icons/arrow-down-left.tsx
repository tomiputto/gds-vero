import { createGDSIcon } from "../create-icon";

const inner = `<path d="M17 7L7 17M7 17H17M7 17V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowDownLeftIcon = createGDSIcon(
  "ArrowDownLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
