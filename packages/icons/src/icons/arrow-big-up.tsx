import { createGDSIcon } from "../create-icon";

const inner = `<path d="M9 18V12H5L12 5L19 12H15V18H9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowBigUpIcon = createGDSIcon(
  "ArrowBigUpIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
