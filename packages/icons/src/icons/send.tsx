import { createGDSIcon } from "../create-icon";

const inner = `<path d="M22 2L15 22L11 13M22 2L2 9L11 13M22 2L11 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SendIcon = createGDSIcon(
  "SendIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
