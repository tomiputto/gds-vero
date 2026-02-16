import { createGDSIcon } from "../create-icon";

const inner = `<path d="M7 20L12 15L17 20M7 4L12 9L17 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChevronsDownUpIcon = createGDSIcon(
  "ChevronsDownUpIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
