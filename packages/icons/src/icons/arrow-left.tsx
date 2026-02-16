import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 19L5 12M5 12L12 5M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowLeftIcon = createGDSIcon(
  "ArrowLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
