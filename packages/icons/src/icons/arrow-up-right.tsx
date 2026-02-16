import { createGDSIcon } from "../create-icon";

const inner = `<path d="M7 7H17M17 7V17M17 7L7 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowUpRightIcon = createGDSIcon(
  "ArrowUpRightIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
