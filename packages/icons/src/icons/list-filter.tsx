import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 6H21M7 12H17M10 18H14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ListFilterIcon = createGDSIcon(
  "ListFilterIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
