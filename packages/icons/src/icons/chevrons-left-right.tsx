import { createGDSIcon } from "../create-icon";

const inner = `<path d="M9 7L4 12L9 17M15 7L20 12L15 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChevronsLeftRightIcon = createGDSIcon(
  "ChevronsLeftRightIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
