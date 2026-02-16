import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 4V20M9 4V20M14 4V20M19 4V20M22 6L2 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Tally5Icon = createGDSIcon(
  "Tally5Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
