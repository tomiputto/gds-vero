import { createGDSIcon } from "../create-icon";

const inner = `<path d="M15 6V12H19L12 19L5 12H9V6H15Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowBigDownIcon = createGDSIcon(
  "ArrowBigDownIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
