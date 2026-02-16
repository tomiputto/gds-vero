import { createGDSIcon } from "../create-icon";

const inner = `<path d="M17 11L12 6L7 11M17 18L12 13L7 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChevronsUpIcon = createGDSIcon(
  "ChevronsUpIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
