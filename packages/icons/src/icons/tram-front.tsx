import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 11H20M12 3V11M8 19L6 22M18 22L16 19M8 15H8.01M16 15H16.01M6 3H18C19.1046 3 20 3.89543 20 5V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V5C4 3.89543 4.89543 3 6 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TramFrontIcon = createGDSIcon(
  "TramFrontIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
