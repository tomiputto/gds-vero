import { createGDSIcon } from "../create-icon";

const inner = `<path d="M18 6.99999C18 1.66699 10 1.66699 10 6.99999V21M6 21H18M6 13H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const PoundSterlingIcon = createGDSIcon(
  "PoundSterlingIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
