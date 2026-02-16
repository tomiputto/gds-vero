import { createGDSIcon } from "../create-icon";

const inner = `<path d="M21 14H16M16 16V12.5C16 11.837 16.2634 11.2011 16.7322 10.7322C17.2011 10.2634 17.837 10 18.5 10C19.163 10 19.7989 10.2634 20.2678 10.7322C20.7366 11.2011 21 11.837 21 12.5V16M4.5 13H10.5M3 16L7.5 7L12 16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ALargeSmallIcon = createGDSIcon(
  "ALargeSmallIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
