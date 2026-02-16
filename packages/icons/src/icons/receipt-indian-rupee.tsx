import { createGDSIcon } from "../create-icon";

const inner = `<path d="M8 7H16M12 17.5L8 15H9C10.0609 15 11.0783 14.5786 11.8284 13.8284C12.5786 13.0783 13 12.0609 13 11C13 9.93913 12.5786 8.92172 11.8284 8.17157C11.0783 7.42143 10.0609 7 9 7M8 11H16M4 2V22L6 21L8 22L10 21L12 22L14 21L16 22L18 21L20 22V2L18 3L16 2L14 3L12 2L10 3L8 2L6 3L4 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;

export const ReceiptIndianRupeeIcon = createGDSIcon(
  "ReceiptIndianRupeeIcon",
  <g dangerouslySetInnerHTML={{ __html: inner }} />,
  { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor" }
);
