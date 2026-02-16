import { createGDSIcon } from "../create-icon";

const inner = `<path d="M16 12H3M16 18H3M10 6H3M21 18V8C21 7.46957 20.7893 6.96086 20.4142 6.58579C20.0391 6.21071 19.5304 6 19 6H14M14 6L16 8M14 6L16 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ListStartIcon = createGDSIcon(
  "ListStartIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
