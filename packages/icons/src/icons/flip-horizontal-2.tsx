import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 20V22M12 14V16M12 8V10M12 2V4M3 7L8 12L3 17V7ZM21 7L16 12L21 17V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FlipHorizontal2Icon = createGDSIcon(
  "FlipHorizontal2Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
