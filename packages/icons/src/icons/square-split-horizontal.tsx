import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 19H5C4 19 3 18 3 17V7C3 6 4 5 5 5H8M16 5H19C20 5 21 6 21 7V17C21 18 20 19 19 19H16M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SquareSplitHorizontalIcon = createGDSIcon(
  "SquareSplitHorizontalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
