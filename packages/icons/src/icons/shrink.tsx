import { createGDSIcon } from "../create-icon";

const inner = `<path d="M15 15L21 21M15 15V19.8M15 15H19.8M9 19.8V15M9 15H4.2M9 15L3 21M15 4.2V9M15 9H19.8M15 9L21 3M9 4.2V9M9 9H4.2M9 9L3 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ShrinkIcon = createGDSIcon(
  "ShrinkIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
