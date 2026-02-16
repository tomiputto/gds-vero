import { createGDSIcon } from "../create-icon";

const inner = `<path d="M21 12H13M21 6H8M21 18H13M3 6V10M3 10C3 11.1 3.9 12 5 12H8M3 10V16C3 17.1 3.9 18 5 18H8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ListTreeIcon = createGDSIcon(
  "ListTreeIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
