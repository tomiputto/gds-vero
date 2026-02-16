import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 2V10M12 10L16 6M12 10L8 6M6 18H6.01M10 18H10.01M4 14H20C21.1046 14 22 14.8954 22 16V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V16C2 14.8954 2.89543 14 4 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const HardDriveDownloadIcon = createGDSIcon(
  "HardDriveDownloadIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
