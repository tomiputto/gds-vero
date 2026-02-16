import { createGDSIcon } from "../create-icon";

const inner = `<path d="M5 9H19M5 15H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const EqualIcon = createGDSIcon(
  "EqualIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
