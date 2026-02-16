import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 12H20M4 6H20M4 18H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MenuIcon = createGDSIcon(
  "MenuIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
