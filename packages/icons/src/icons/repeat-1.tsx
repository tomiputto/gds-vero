import { createGDSIcon } from "../create-icon";

const inner = `<path d="M17 2L21 6M21 6L17 10M21 6H7C5.93913 6 4.92172 6.42143 4.17157 7.17157C3.42143 7.92172 3 8.93913 3 10V11M7 22L3 18M3 18L7 14M3 18H17C18.0609 18 19.0783 17.5786 19.8284 16.8284C20.5786 16.0783 21 15.0609 21 14V13M11 10H12V14" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const Repeat1Icon = createGDSIcon(
  "Repeat1Icon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
