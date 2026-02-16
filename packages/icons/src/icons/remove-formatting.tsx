import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 7V4H20V7M5 20H11M13 4L8 20M15 15L20 20M20 15L15 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const RemoveFormattingIcon = createGDSIcon(
  "RemoveFormattingIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
