import { createGDSIcon } from "../create-icon";

const inner = `<path d="M18 6L7 17L2 12M22 10L14.5 17.5L13 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const CheckCheckIcon = createGDSIcon(
  "CheckCheckIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
