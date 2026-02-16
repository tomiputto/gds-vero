import { createGDSIcon } from "../create-icon";

const inner = `<path d="M16 12H22M22 12L19 15M22 12L19 9M8 12H2M2 12L5 9M2 12L5 15M12 2V4M12 8V10M12 14V16M12 20V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const UnfoldHorizontalIcon = createGDSIcon(
  "UnfoldHorizontalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
