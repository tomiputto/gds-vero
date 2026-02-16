import { createGDSIcon } from "../create-icon";

const inner = `<path d="M9 19H15M9 15V12H5L12 5L19 12H15V15H9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowBigUpDashIcon = createGDSIcon(
  "ArrowBigUpDashIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
