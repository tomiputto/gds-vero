import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 9V22M9 22H15M9 2H15L18 9H6L9 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const LampFloorIcon = createGDSIcon(
  "LampFloorIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
