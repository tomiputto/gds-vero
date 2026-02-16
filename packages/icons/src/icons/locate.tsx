import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 12H5M5 12C5 15.866 8.13401 19 12 19M5 12C5 8.13401 8.13401 5 12 5M19 12H22M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M12 2V5M12 19V22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const LocateIcon = createGDSIcon(
  "LocateIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
