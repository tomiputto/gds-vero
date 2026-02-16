import { createGDSIcon } from "../create-icon";

const inner = `<path d="M19 15V9M15 15H12V19L5 12L12 5V9H15V15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowBigLeftDashIcon = createGDSIcon(
  "ArrowBigLeftDashIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
