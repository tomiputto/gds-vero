import { createGDSIcon } from "../create-icon";

const inner = `<path d="M13.013 3H2L10 12.46V19L14 21V12.46L14.9 11.405M22 3L17 8M17 3L22 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FilterXIcon = createGDSIcon(
  "FilterXIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
