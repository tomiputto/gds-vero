import { createGDSIcon } from "../create-icon";

const inner = `<path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChartNoAxesColumnIcon = createGDSIcon(
  "ChartNoAxesColumnIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
