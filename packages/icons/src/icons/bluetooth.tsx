import { createGDSIcon } from "../create-icon";

const inner = `<path d="M7 7L17 17L12 22V2L17 7L7 17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const BluetoothIcon = createGDSIcon(
  "BluetoothIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
