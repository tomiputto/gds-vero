import { createGDSIcon } from "../create-icon";

const inner = `<path d="M14 15L9 20M9 20L4 15M9 20V8C9 6.93913 9.42143 5.92172 10.1716 5.17157C10.9217 4.42143 11.9391 4 13 4H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const CornerLeftDownIcon = createGDSIcon(
  "CornerLeftDownIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
