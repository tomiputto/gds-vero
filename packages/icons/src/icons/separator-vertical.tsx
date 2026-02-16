import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 3V21M8 8L4 12L8 16M16 16L20 12L16 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SeparatorVerticalIcon = createGDSIcon(
  "SeparatorVerticalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
