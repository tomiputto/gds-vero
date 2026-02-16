import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 9.5V21M12 9.5L6 3M12 9.5L18 3M6 15H18M6 11H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const JapaneseYenIcon = createGDSIcon(
  "JapaneseYenIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
