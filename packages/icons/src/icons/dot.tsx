import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12.1 13.1C12.6523 13.1 13.1 12.6523 13.1 12.1C13.1 11.5477 12.6523 11.1 12.1 11.1C11.5477 11.1 11.1 11.5477 11.1 12.1C11.1 12.6523 11.5477 13.1 12.1 13.1Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const DotIcon = createGDSIcon(
  "DotIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
