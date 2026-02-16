import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 20H2.01M7 20V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SignalLowIcon = createGDSIcon(
  "SignalLowIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
