import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 17.8L5.8 21L7 14.1L2 9.3L9 8.3L12 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const StarHalfIcon = createGDSIcon(
  "StarHalfIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
