import { createGDSIcon } from "../create-icon";

const inner = `<path d="M13 13L19 19M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MousePointerIcon = createGDSIcon(
  "MousePointerIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
