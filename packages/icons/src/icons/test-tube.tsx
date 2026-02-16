import { createGDSIcon } from "../create-icon";

const inner = `<path d="M14.5 2V19.5C14.5 20.9 13.4 22 12 22C10.6 22 9.5 20.9 9.5 19.5V2M8.5 2H15.5M14.5 16H9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TestTubeIcon = createGDSIcon(
  "TestTubeIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
