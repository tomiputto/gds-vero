import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 8L4 10L2 12L4 14L2 16M22 8L20 10L22 12L20 14L22 16M9 5H15C15.5523 5 16 5.44772 16 6V18C16 18.5523 15.5523 19 15 19H9C8.44772 19 8 18.5523 8 18V6C8 5.44772 8.44772 5 9 5Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const VibrateIcon = createGDSIcon(
  "VibrateIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
