import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 12H21M8 8L12 4L16 8M16 16L12 20L8 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SeparatorHorizontalIcon = createGDSIcon(
  "SeparatorHorizontalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
