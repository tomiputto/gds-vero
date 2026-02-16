import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 6L7 3M7 3L10 6M7 3V17M14 6L17 3M17 3L20 6M17 3V17M4 21H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowsUpFromLineIcon = createGDSIcon(
  "ArrowsUpFromLineIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
