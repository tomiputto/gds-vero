import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 22H16M12 11V22M12 11L19 3H5L12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MartiniIcon = createGDSIcon(
  "MartiniIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
