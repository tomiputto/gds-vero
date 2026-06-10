import type { ReactNode } from "react";

export type VeroMainHeaderLink = {
  id: string;
  label: string;
  href: string;
};

export type VeroAudienceTab = VeroMainHeaderLink & {
  isActive?: boolean;
};

export type VeroNavMenuItem = VeroMainHeaderLink;

export type VeroNavItem = {
  id: string;
  label: string;
  href?: string;
  isActive?: boolean;
  menuItems?: VeroNavMenuItem[];
};

export type VeroLanguageOption = VeroMainHeaderLink & {
  isActive?: boolean;
};

export type VeroMainHeaderProps = {
  /** Logo link URL. Default: `https://www.vero.fi` */
  logoHref?: string;
  /** Logo text. Default: `vero.fi` */
  logoLabel?: string;
  audienceTabs?: VeroAudienceTab[];
  searchHref?: string;
  searchLabel?: string;
  onSearchClick?: () => void;
  languageLabel?: string;
  languages?: VeroLanguageOption[];
  omaVeroLabel?: string;
  omaVeroItems?: VeroMainHeaderLink[];
  navItems?: VeroNavItem[];
  /** Extra actions rendered at the end of the top bar (e.g. theme toggle). */
  topBarEnd?: ReactNode;
  className?: string;
};
