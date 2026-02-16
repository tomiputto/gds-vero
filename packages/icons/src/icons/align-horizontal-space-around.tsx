import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 22V2M20 22V2M11 7H13C14.1046 7 15 7.89543 15 9V15C15 16.1046 14.1046 17 13 17H11C9.89543 17 9 16.1046 9 15V9C9 7.89543 9.89543 7 11 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const AlignHorizontalSpaceAroundIcon = createGDSIcon(
  "AlignHorizontalSpaceAroundIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
