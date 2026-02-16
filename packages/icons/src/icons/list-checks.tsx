import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 17L5 19L9 15M3 7L5 9L9 5M13 6H21M13 12H21M13 18H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ListChecksIcon = createGDSIcon(
  "ListChecksIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
