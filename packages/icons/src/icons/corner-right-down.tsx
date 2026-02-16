import { createGDSIcon } from "../create-icon";

const inner = `<path d="M10 15L15 20M15 20L20 15M15 20V8C15 6.93913 14.5786 5.92172 13.8284 5.17157C13.0783 4.42143 12.0609 4 11 4H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const CornerRightDownIcon = createGDSIcon(
  "CornerRightDownIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
