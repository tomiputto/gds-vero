import { createGDSIcon } from "../create-icon";

const inner = `<path d="M22 17V18C22 18.5 21.5 19 21 19H3C2.5 19 2 18.5 2 18V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SpaceIcon = createGDSIcon(
  "SpaceIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
