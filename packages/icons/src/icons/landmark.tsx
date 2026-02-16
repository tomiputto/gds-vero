import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 22H21M6 18V11M10 18V11M14 18V11M18 18V11M12 2L20 7H4L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const LandmarkIcon = createGDSIcon(
  "LandmarkIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
