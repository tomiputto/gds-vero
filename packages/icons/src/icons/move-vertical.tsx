import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 18L12 22M12 22L16 18M12 22V2M8 6L12 2M12 2L16 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MoveVerticalIcon = createGDSIcon(
  "MoveVerticalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
