import { createGDSIcon } from "../create-icon";

const inner = `<path d="M5 16V9H19V2H5L19 16H12M5 16L12 23V16M5 16H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FramerIcon = createGDSIcon(
  "FramerIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
