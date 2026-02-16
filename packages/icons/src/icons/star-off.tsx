import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8.34 8.34L2 9.27L7 14.14L5.82 21L12 17.77L18.18 21L17.59 17.57M18.42 12.76L22 9.27L15.09 8.27L12 2L10.56 4.91M2 2L22 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const StarOffIcon = createGDSIcon(
  "StarOffIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
