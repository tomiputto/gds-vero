import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 12H8M8 12L5 15M8 12L5 9M22 12H16M16 12L19 9M16 12L19 15M12 2V4M12 8V10M12 14V16M12 20V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FoldHorizontalIcon = createGDSIcon(
  "FoldHorizontalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
