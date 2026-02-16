import { createGDSIcon } from "../create-icon";

const inner = `<path d="M10 9L15 4M15 4L20 9M15 4V16C15 17.0609 14.5786 18.0783 13.8284 18.8284C13.0783 19.5786 12.0609 20 11 20H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const CornerRightUpIcon = createGDSIcon(
  "CornerRightUpIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
