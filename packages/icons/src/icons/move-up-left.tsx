import { createGDSIcon } from "../create-icon";

const inner = `<path d="M5 11V5M5 5H11M5 5L19 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MoveUpLeftIcon = createGDSIcon(
  "MoveUpLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
