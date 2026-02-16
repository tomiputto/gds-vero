import { createGDSIcon } from "../create-icon";

const inner = `<path d="M22 2L2 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SlashIcon = createGDSIcon(
  "SlashIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
