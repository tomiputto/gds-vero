import { createGDSIcon } from "../create-icon";

const inner = `<path d="M21 7V13M21 13H15M21 13L18 10.3C16.3511 8.82116 14.2149 8.00226 12 8C9.61305 8 7.32387 8.94821 5.63604 10.636C3.94821 12.3239 3 14.6131 3 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const RedoIcon = createGDSIcon(
  "RedoIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
