import { createGDSIcon } from "../create-icon";

const inner = `<path d="M11 12H3M16 6H3M16 18H3M19 10L15 14M15 10L19 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ListXIcon = createGDSIcon(
  "ListXIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
