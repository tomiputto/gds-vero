import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 3L4 7M4 7L8 11M4 7H20M16 21L20 17M20 17L16 13M20 17H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowLeftRightIcon = createGDSIcon(
  "ArrowLeftRightIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
