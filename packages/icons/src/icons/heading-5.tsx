import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 12H12M4 18V6M12 18V6M21 10H17V13H18.3C19.8 13 21 14.1 21 15.5C21 16.9 19.8 18 18.3 18C17.8 18 17.4 17.9 17 17.7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Heading5Icon = createGDSIcon(
  "Heading5Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
