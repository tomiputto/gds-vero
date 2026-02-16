import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 22V16M12 16L15 19M12 16L9 19M12 8V2M12 8L15 5M12 8L9 5M4 12H2M10 12H8M16 12H14M22 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FoldVerticalIcon = createGDSIcon(
  "FoldVerticalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
