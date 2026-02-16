import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Tally1Icon = createGDSIcon(
  "Tally1Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
