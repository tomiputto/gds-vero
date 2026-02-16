import { createGDSIcon } from "../create-icon";

const inner = `<path d="M17 22V2L7 7L17 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FlagTriangleLeftIcon = createGDSIcon(
  "FlagTriangleLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
