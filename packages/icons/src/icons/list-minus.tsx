import { createGDSIcon } from "../create-icon";

const inner = `<path d="M11 12H3M16 6H3M16 18H3M21 12H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ListMinusIcon = createGDSIcon(
  "ListMinusIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
