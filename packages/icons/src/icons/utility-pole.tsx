import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 2V22M2 5H22M3 3V5M7 3V5M17 3V5M21 3V5M19 5L12 12L5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const UtilityPoleIcon = createGDSIcon(
  "UtilityPoleIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
