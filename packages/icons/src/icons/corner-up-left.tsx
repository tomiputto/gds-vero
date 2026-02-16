import { createGDSIcon } from "../create-icon";

const inner = `<path d="M9 14L4 9M4 9L9 4M4 9H16C17.0609 9 18.0783 9.42143 18.8284 10.1716C19.5786 10.9217 20 11.9391 20 13V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const CornerUpLeftIcon = createGDSIcon(
  "CornerUpLeftIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
