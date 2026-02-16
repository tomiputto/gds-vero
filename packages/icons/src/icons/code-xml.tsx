import { createGDSIcon } from "../create-icon";

const inner = `<path d="M18 16L22 12L18 8M6 8L2 12L6 16M14.5 4L9.5 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const CodeXmlIcon = createGDSIcon(
  "CodeXmlIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
