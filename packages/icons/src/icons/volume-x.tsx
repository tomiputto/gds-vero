import { createGDSIcon } from "../create-icon";

const inner = `<path d="M22 9L16 15M16 9L22 15M11 5L6 9H2V15H6L11 19V5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const VolumeXIcon = createGDSIcon(
  "VolumeXIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
