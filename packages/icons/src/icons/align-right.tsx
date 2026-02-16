import { createGDSIcon } from "../create-icon";

const inner = `<path d="M21 6H3M21 12H9M21 18H7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const AlignRightIcon = createGDSIcon(
  "AlignRightIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
