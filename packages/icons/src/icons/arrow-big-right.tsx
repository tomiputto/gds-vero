import { createGDSIcon } from "../create-icon";

const inner = `<path d="M6 9H12V5L19 12L12 19V15H6V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowBigRightIcon = createGDSIcon(
  "ArrowBigRightIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
