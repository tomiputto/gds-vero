import { createGDSIcon } from "../create-icon";

const inner = `<path d="M18 15H12V19L5 12L12 5V9H18V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowBigLeftIcon = createGDSIcon(
  "ArrowBigLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
