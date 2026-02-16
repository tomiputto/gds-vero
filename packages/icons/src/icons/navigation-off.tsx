import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8.43 8.43L3 11L11 13L13 21L15.57 15.57M17.39 11.73L22 2L12.27 6.61M2 2L22 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const NavigationOffIcon = createGDSIcon(
  "NavigationOffIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
