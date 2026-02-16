import { createGDSIcon } from "../create-icon";

const inner = `<path d="M19 5V19M5 4L15 12L5 20V4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SkipForwardIcon = createGDSIcon(
  "SkipForwardIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
