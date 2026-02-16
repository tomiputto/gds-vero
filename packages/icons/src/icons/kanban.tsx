import { createGDSIcon } from "../create-icon";

const inner = `<path d="M6 5V16M12 5V11M18 5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const KanbanIcon = createGDSIcon(
  "KanbanIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
