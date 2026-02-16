import { createGDSIcon } from "../create-icon";

const inner = `<path d="M22 17L13.5 8.5L8.5 13.5L2 7M22 17H16M22 17V11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TrendingDownIcon = createGDSIcon(
  "TrendingDownIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
