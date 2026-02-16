import { createGDSIcon } from "../create-icon";

const inner = `<path d="M17 18L11 12L17 6M7 6V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChevronFirstIcon = createGDSIcon(
  "ChevronFirstIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
