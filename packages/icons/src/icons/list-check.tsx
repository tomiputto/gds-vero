import { createGDSIcon } from "../create-icon";

const inner = `<path d="M11 18H3M15 18L17 20L21 16M16 12H3M16 6H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ListCheckIcon = createGDSIcon(
  "ListCheckIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
