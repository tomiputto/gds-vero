import { createGDSIcon } from "../create-icon";

const inner = `<path d="M21 7L6.82 21.18C6.28846 21.7057 5.57052 21.9997 4.82294 21.9978C4.07537 21.9959 3.35891 21.6983 2.83 21.17C2.29996 20.6394 2.00223 19.92 2.00223 19.17C2.00223 18.42 2.29996 17.7006 2.83 17.17L17 3M16 2L22 8M12 16H4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TestTubeDiagonalIcon = createGDSIcon(
  "TestTubeDiagonalIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
