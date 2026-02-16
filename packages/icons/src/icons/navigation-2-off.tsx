import { createGDSIcon } from "../create-icon";

const inner = `<path d="M9.31 9.31L5 21L12 17L19 21L17.83 17.83M14.53 8.88L12 2L10.83 5.17M2 2L22 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Navigation2OffIcon = createGDSIcon(
  "Navigation2OffIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
