import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 3L12 11L17 6L22 21H2L8 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MountainIcon = createGDSIcon(
  "MountainIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
