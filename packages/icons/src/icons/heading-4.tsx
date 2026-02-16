import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 12H12M4 18V6M12 18V6M17 10V14H21M21 10V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Heading4Icon = createGDSIcon(
  "Heading4Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
