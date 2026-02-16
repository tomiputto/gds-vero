import { createGDSIcon } from "../create-icon";

const inner = `<path d="M15 4V2M15 16V14M8 9H10M20 9H22M17.8 11.8L19 13M15 9H15.01M17.8 6.2L19 5M3 21L12 12M12.2 6.2L11 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const WandIcon = createGDSIcon(
  "WandIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
