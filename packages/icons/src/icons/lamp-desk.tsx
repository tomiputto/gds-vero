import { createGDSIcon } from "../create-icon";

const inner = `<path d="M14 5L11 8M14 5L21 7L13 15L11 8M14 5L11 2L8 5L11 8M9.5 6.5L4 12L7 18M3 22V20C3 18.9 3.9 18 5 18H9C9.53043 18 10.0391 18.2107 10.4142 18.5858C10.7893 18.9609 11 19.4696 11 20V22H3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const LampDeskIcon = createGDSIcon(
  "LampDeskIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
