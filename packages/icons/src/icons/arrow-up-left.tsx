import { createGDSIcon } from "../create-icon";

const inner = `<path d="M7 17V7M7 7H17M7 7L17 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowUpLeftIcon = createGDSIcon(
  "ArrowUpLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
