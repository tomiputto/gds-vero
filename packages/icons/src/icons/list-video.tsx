import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 12H3M16 6H3M12 18H3M16 12L21 15L16 18V12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ListVideoIcon = createGDSIcon(
  "ListVideoIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
