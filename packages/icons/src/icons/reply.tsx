import { createGDSIcon } from "../create-icon";

const inner = `<path d="M9 17L4 12M4 12L9 7M4 12H16C17.0609 12 18.0783 12.4214 18.8284 13.1716C19.5786 13.9217 20 14.9391 20 16V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ReplyIcon = createGDSIcon(
  "ReplyIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
