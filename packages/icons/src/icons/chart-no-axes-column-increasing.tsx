import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 20V10M18 20V4M6 20V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChartNoAxesColumnIncreasingIcon = createGDSIcon(
  "ChartNoAxesColumnIncreasingIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
