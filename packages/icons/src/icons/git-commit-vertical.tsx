import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 3V9M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15M12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15M12 15V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const GitCommitVerticalIcon = createGDSIcon(
  "GitCommitVerticalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
