import { createGDSIcon } from "../create-icon";

const inner = `<path d="M5 15H19M5 9H19M14 20L9 15L15 9L10 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const RailSymbolIcon = createGDSIcon(
  "RailSymbolIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
