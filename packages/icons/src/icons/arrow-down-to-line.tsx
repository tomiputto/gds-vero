import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 17V3M12 17L6 11M12 17L18 11M19 21H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowDownToLineIcon = createGDSIcon(
  "ArrowDownToLineIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
