import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 21C8 21 4 18 4 12C4 6 8 3 8 3M16 3C16 3 20 6 20 12C20 18 16 21 16 21M15 9L9 15M9 9L15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const VariableIcon = createGDSIcon(
  "VariableIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
