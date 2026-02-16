import { createGDSIcon } from "../create-icon";

const inner = `<path d="M7 6L12 11L17 6M7 13L12 18L17 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChevronsDownIcon = createGDSIcon(
  "ChevronsDownIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
