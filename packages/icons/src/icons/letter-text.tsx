import { createGDSIcon } from "../create-icon";

const inner = `<path d="M15 12H21M15 6H21M3 13L6.553 5.276C6.59457 5.19306 6.6584 5.12332 6.73734 5.07458C6.81628 5.02584 6.90723 5.00003 7 5.00003C7.09277 5.00003 7.18372 5.02584 7.26266 5.07458C7.3416 5.12332 7.40543 5.19306 7.447 5.276L11 13M3 18H21M4 11H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const LetterTextIcon = createGDSIcon(
  "LetterTextIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
