import { createGDSIcon } from "../create-icon";

const inner = `<path d="M7 17L2 12L7 7M12 17L7 12M7 12L12 7M7 12H18C19.0609 12 20.0783 12.4214 20.8284 13.1716C21.5786 13.9217 22 14.9391 22 16V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ReplyAllIcon = createGDSIcon(
  "ReplyAllIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
