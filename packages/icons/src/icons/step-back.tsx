import { createGDSIcon } from "../create-icon";

const inner = `<path d="M18 20V4M14 20L4 12L14 4V20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const StepBackIcon = createGDSIcon(
  "StepBackIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
