import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 6H18M6 12H15M11 18H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChartNoAxesGanttIcon = createGDSIcon(
  "ChartNoAxesGanttIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
