import { createGDSIcon } from "../create-icon";

const inner = `<path d="M5 3H19M18 13L12 7M12 7L6 13M12 7V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowUpToLineIcon = createGDSIcon(
  "ArrowUpToLineIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
