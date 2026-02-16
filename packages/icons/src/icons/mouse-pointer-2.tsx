import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 4L11.07 21L13.58 13.61L21 11.07L4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const MousePointer2Icon = createGDSIcon(
  "MousePointer2Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
