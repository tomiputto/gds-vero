import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 20V8C8 5.8 9.8 4 12 4C13.5 4 14.8 4.8 15.5 6M6 12H10M14 12H16V20M6 20H10M14 20H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const LigatureIcon = createGDSIcon(
  "LigatureIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
