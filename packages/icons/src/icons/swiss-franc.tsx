import { createGDSIcon } from "../create-icon";

const inner = `<path d="M10 21V3H18M6 16H15M10 9.5H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SwissFrancIcon = createGDSIcon(
  "SwissFrancIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
