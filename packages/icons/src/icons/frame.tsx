import { createGDSIcon } from "../create-icon";

const inner = `<path d="M22 6H2M22 18H2M6 2V22M18 2V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FrameIcon = createGDSIcon(
  "FrameIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
