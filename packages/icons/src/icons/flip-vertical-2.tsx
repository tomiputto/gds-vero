import { createGDSIcon } from "../create-icon";

const inner = `<path d="M4 12H2M10 12H8M16 12H14M22 12H20M17 3L12 8L7 3H17ZM17 21L12 16L7 21H17Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const FlipVertical2Icon = createGDSIcon(
  "FlipVertical2Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
