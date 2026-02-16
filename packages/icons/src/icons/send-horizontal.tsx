import { createGDSIcon } from "../create-icon";

const inner = `<path d="M6 12L3 3L22 12M6 12L3 21L22 12M6 12H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SendHorizontalIcon = createGDSIcon(
  "SendHorizontalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
