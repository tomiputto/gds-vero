import { createGDSIcon } from "../create-icon";

const inner = `<path d="M22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17M22 17C22 14.2386 19.7614 12 17 12C14.2386 12 12 14.2386 12 17M22 17H12M3.46 10.54L10.54 3.46M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const TabletsIcon = createGDSIcon(
  "TabletsIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
