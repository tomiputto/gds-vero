import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 17L10 11L4 5M12 19H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TerminalIcon = createGDSIcon(
  "TerminalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
