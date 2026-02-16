import { createGDSIcon } from "../create-icon";

const inner = `<path d="M7 22V2L17 7L7 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FlagTriangleRightIcon = createGDSIcon(
  "FlagTriangleRightIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
