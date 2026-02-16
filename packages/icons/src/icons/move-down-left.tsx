import { createGDSIcon } from "../create-icon";

const inner = `<path d="M11 19H5M5 19V13M5 19L19 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MoveDownLeftIcon = createGDSIcon(
  "MoveDownLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
