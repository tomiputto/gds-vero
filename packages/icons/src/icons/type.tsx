import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 7V4H20V7M9 20H15M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TypeIcon = createGDSIcon(
  "TypeIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
