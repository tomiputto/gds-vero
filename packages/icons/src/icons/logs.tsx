import { createGDSIcon } from "../create-icon";

const inner = `<path d="M13 12H21M13 18H21M13 6H21M3 12H4M3 18H4M3 6H4M8 12H9M8 18H9M8 6H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const LogsIcon = createGDSIcon(
  "LogsIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
