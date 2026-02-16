import { createGDSIcon } from "../create-icon";

const inner = `<path d="M21 6H3M15 12H3M17 18H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const AlignLeftIcon = createGDSIcon(
  "AlignLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
