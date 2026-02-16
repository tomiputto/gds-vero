import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 12H12M4 18V6M12 18V6M21 18H17C17 14 21 15 21 12C21 10.5 19 9.5 17 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Heading2Icon = createGDSIcon(
  "Heading2Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
