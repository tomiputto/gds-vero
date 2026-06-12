import type { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { VeroMainHeader } from "./VeroMainHeader";
import type { VeroMainHeaderProps } from "./vero-main-header-types";

export type VeroAppShellProps = VeroMainHeaderProps & {
  children: ReactNode;
};

/**
 * Full-page vero.fi shell: site header + flex column on `bg.subtle`.
 * Place {@link VeroPageLayout} (or custom main) as children.
 */
export function VeroAppShell({ children, ...headerProps }: VeroAppShellProps) {
  return (
    <Flex direction="column" minH="100vh" bg="bg.subtle" color="fg">
      <VeroMainHeader {...headerProps} />
      {children}
    </Flex>
  );
}
