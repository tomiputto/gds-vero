import { createGDSIcon } from "../create-icon";

const inner = `<path d="M19 4H10M14 20H5M15 4L9 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ItalicIcon = createGDSIcon(
  "ItalicIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
