import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 22V16M12 22L15 19M12 22L9 19M12 8V2M12 2L15 5M12 2L9 5M4 12H2M10 12H8M16 12H14M22 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const UnfoldVerticalIcon = createGDSIcon(
  "UnfoldVerticalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
