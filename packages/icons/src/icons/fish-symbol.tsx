import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 16C2 16 11 1 22 12C11 23 2 8 2 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FishSymbolIcon = createGDSIcon(
  "FishSymbolIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
