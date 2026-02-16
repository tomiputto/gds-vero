import { createGDSIcon } from "../create-icon";

const inner = `<path d="M16 18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18C8 15.7909 9.79086 14 12 14C14.2091 14 16 15.7909 16 18ZM16 18V2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Music3Icon = createGDSIcon(
  "Music3Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
