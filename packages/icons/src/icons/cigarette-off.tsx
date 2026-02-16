import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 2L22 22M12 12H2V16H16M22 12V16M18 12H17.5M7 12V16M18 8C18 5.5 16 5.5 16 3M22 8C22 5.5 20 5.5 20 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const CigaretteOffIcon = createGDSIcon(
  "CigaretteOffIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
