import { createGDSIcon } from "../create-icon";

const inner = `<path d="M16 6L20 20M12 6V20M8 8V20M4 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const LibraryIcon = createGDSIcon(
  "LibraryIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
