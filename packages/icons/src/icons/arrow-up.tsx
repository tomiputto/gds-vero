import { createGDSIcon } from "../create-icon";

const inner = `<path d="M5 12L12 5M12 5L19 12M12 5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowUpIcon = createGDSIcon(
  "ArrowUpIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
