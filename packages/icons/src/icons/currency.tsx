import { createGDSIcon } from "../create-icon";

const inner = `<path d="M3 3L6 6M21 3L18 6M3 21L6 18M21 21L18 18M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const CurrencyIcon = createGDSIcon(
  "CurrencyIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
