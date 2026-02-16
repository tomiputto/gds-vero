import { createGDSIcon } from "../create-icon";

const inner = `<path d="M6 4V20M10 4L20 12L10 20V4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const StepForwardIcon = createGDSIcon(
  "StepForwardIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
