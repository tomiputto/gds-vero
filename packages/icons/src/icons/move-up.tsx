import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 6L12 2M12 2L16 6M12 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MoveUpIcon = createGDSIcon(
  "MoveUpIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
