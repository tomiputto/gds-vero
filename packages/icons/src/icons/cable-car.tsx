import { createGDSIcon } from "../create-icon";

const inner = `<path d="M10 3H10.01M14 2H14.01M2 9L22 4M12 12V6.5M9 12V17M15 12V17M4 17H20M7 12H17C18.6569 12 20 13.3431 20 15V19C20 20.6569 18.6569 22 17 22H7C5.34315 22 4 20.6569 4 19V15C4 13.3431 5.34315 12 7 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const CableCarIcon = createGDSIcon(
  "CableCarIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
