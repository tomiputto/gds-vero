import { createGDSIcon } from "../create-icon";

const inner = `<path d="M12 3V4M12 20V21M3 12H4M20 12H21M18.364 5.636L17.657 6.343M6.343 17.657L5.636 18.364M5.636 5.636L6.343 6.343M17.657 17.657L18.364 18.364M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const SunMediumIcon = createGDSIcon(
  "SunMediumIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
