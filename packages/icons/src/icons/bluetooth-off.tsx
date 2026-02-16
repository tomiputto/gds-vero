import { createGDSIcon } from "../create-icon";

const inner = `<path d="M17 17L12 22V12L7 17M2 2L22 22M14.5 9.5L17 7L12 2V6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const BluetoothOffIcon = createGDSIcon(
  "BluetoothOffIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
