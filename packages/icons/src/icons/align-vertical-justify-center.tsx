import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 12H22M7 16H17C18.1046 16 19 16.8954 19 18V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V18C5 16.8954 5.89543 16 7 16ZM9 2H15C16.1046 2 17 2.89543 17 4V6C17 7.10457 16.1046 8 15 8H9C7.89543 8 7 7.10457 7 6V4C7 2.89543 7.89543 2 9 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const AlignVerticalJustifyCenterIcon = createGDSIcon(
  "AlignVerticalJustifyCenterIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
