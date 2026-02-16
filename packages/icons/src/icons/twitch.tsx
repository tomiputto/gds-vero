import { createGDSIcon } from "../create-icon";

const inner = `<path d="M11 11V7M16 11V7M21 2H3V18H8V22L12 18H17L21 14V2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TwitchIcon = createGDSIcon(
  "TwitchIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
