import { createGDSIcon } from "../create-icon";

const inner = `<path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12M15 12H21M9 12H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const GitCommitHorizontalIcon = createGDSIcon(
  "GitCommitHorizontalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
