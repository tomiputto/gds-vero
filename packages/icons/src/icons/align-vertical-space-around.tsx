import { createGDSIcon } from "../create-icon";

const inner = `<path d="M22 20H2M22 4H2M9 9H15C16.1046 9 17 9.89543 17 11V13C17 14.1046 16.1046 15 15 15H9C7.89543 15 7 14.1046 7 13V11C7 9.89543 7.89543 9 9 9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const AlignVerticalSpaceAroundIcon = createGDSIcon(
  "AlignVerticalSpaceAroundIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
