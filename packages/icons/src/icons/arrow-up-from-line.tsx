import { createGDSIcon } from "../create-icon";

const inner = `<path d="M18 9L12 3M12 3L6 9M12 3V17M5 21H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowUpFromLineIcon = createGDSIcon(
  "ArrowUpFromLineIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
