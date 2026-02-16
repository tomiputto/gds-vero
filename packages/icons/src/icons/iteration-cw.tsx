import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 10C4 5.6 7.6 2 12 2C16.4 2 20 5.6 20 10C20 14.4 16.4 18 12 18H4M4 18L8 22M4 18L8 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const IterationCwIcon = createGDSIcon(
  "IterationCwIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
