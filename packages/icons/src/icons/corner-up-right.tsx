import { createGDSIcon } from "../create-icon";

const inner = `<path d="M15 14L20 9M20 9L15 4M20 9H8C6.93913 9 5.92172 9.42143 5.17157 10.1716C4.42143 10.9217 4 11.9391 4 13V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const CornerUpRightIcon = createGDSIcon(
  "CornerUpRightIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
