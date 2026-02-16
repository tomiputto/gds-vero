import { createGDSIcon } from "../create-icon";

const inner = `<path d="M16 12H3M16 6H3M10 18H3M21 6V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H14M14 18L16 16M14 18L16 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ListEndIcon = createGDSIcon(
  "ListEndIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
