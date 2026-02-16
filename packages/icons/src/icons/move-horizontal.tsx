import { createGDSIcon } from "../create-icon";

const inner = `<path d="M18 8L22 12M22 12L18 16M22 12H2M6 8L2 12M2 12L6 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MoveHorizontalIcon = createGDSIcon(
  "MoveHorizontalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
