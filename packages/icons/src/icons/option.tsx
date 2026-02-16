import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 3H9L15 21H21M14 3H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const OptionIcon = createGDSIcon(
  "OptionIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
