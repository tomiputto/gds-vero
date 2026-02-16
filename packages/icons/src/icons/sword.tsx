import { createGDSIcon } from "../create-icon";

const inner = `<path d="M14.5 17.5L3 6V3H6L17.5 14.5M13 19L19 13M16 16L20 20M19 21L21 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SwordIcon = createGDSIcon(
  "SwordIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
