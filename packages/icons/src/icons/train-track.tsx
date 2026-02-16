import { createGDSIcon } from "../create-icon";

const inner = `<path d="M2 17L17 2M2 14L10 22M5 11L13 19M8 8L16 16M11 5L19 13M14 2L22 10M7 22L22 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TrainTrackIcon = createGDSIcon(
  "TrainTrackIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
