import { createGDSIcon } from "../create-icon";

const inner = `<path d="M5 19V5M19 20L9 12L19 4V20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SkipBackIcon = createGDSIcon(
  "SkipBackIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
