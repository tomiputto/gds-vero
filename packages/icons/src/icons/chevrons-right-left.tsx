import { createGDSIcon } from "../create-icon";

const inner = `<path d="M20 17L15 12L20 7M4 17L9 12L4 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ChevronsRightLeftIcon = createGDSIcon(
  "ChevronsRightLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
