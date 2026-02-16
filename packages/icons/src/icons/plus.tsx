import { createGDSIcon } from "../create-icon";

const inner = `<path d="M5 12H19M12 5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const PlusIcon = createGDSIcon(
  "PlusIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
