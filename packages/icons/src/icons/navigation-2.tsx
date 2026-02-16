import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 2L19 21L12 17L5 21L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Navigation2Icon = createGDSIcon(
  "Navigation2Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
