import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 16L7 20M7 20L11 16M7 20V4M17 10V4H15M15 10H19M17 14C18.1046 14 19 14.8954 19 16V18C19 19.1046 18.1046 20 17 20C15.8954 20 15 19.1046 15 18V16C15 14.8954 15.8954 14 17 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ArrowDown10Icon = createGDSIcon(
  "ArrowDown10Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
