import { createGDSIcon } from "../create-icon";

const inner = `<path d="M6 8L2 12M2 12L6 16M2 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MoveLeftIcon = createGDSIcon(
  "MoveLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
