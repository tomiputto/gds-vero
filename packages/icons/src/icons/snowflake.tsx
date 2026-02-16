import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 12H22M12 2V22M20 16L16 12L20 8M4 8L8 12L4 16M16 4L12 8L8 4M8 20L12 16L16 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SnowflakeIcon = createGDSIcon(
  "SnowflakeIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
