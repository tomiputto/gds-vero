import { createGDSIcon } from "../create-icon";

const inner = `<path d="M19 3H5M12 21V7M12 21L6 15M12 21L18 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowDownFromLineIcon = createGDSIcon(
  "ArrowDownFromLineIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
