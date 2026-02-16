import { createGDSIcon } from "../create-icon";

const inner = `<path d="M5 8V5C5 4 6 3 7 3H17C18 3 19 4 19 5V8M19 16V19C19 20 18 21 17 21H7C6 21 5 20 5 19V16M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SquareSplitVerticalIcon = createGDSIcon(
  "SquareSplitVerticalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
