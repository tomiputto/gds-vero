import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 12L7 2M7 12L12 2M12 12L17 2M17 12L22 2M4.5 7H19.5M12 16V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const AntennaIcon = createGDSIcon(
  "AntennaIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
