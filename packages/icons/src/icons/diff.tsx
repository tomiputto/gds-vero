import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 3V17M5 10H19M5 21H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const DiffIcon = createGDSIcon(
  "DiffIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
