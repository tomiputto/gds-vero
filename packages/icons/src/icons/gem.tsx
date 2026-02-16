import { createGDSIcon } from "../create-icon";

const inner = `<path d="M22 9L18 3H6L2 9M22 9L12 22M22 9H2M12 22L2 9M12 22L8 9L11 3M12 22L16 9L13 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const GemIcon = createGDSIcon(
  "GemIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
