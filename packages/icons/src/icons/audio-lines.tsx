import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 10V13M6 6V17M10 3V21M14 8V15M18 5V18M22 10V13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const AudioLinesIcon = createGDSIcon(
  "AudioLinesIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
