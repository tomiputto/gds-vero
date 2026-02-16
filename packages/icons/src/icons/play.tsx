import { createGDSIcon } from "../create-icon";

const inner = `<path d="M6 3L20 12L6 21V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const PlayIcon = createGDSIcon(
  "PlayIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
