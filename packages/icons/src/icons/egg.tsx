import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 22C18.23 21.95 19.87 16.43 19.5 12C19.14 7.66 15.55 2.04 12 2C8.45 2.04 4.86 7.66 4.5 12C4.13 16.43 5.77 21.95 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const EggIcon = createGDSIcon(
  "EggIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
