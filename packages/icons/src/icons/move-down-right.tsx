import { createGDSIcon } from "../create-icon";

const inner = `<path d="M19 13V19M19 19H13M19 19L5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MoveDownRightIcon = createGDSIcon(
  "MoveDownRightIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
