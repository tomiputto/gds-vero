import { createGDSIcon } from "../create-icon";

const inner = `<path d="M22 7L13.5 15.5L8.5 10.5L2 17M22 7H16M22 7V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TrendingUpIcon = createGDSIcon(
  "TrendingUpIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
