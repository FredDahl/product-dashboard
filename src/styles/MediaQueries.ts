import { BREAKPOINTS } from './Layout';

export const mediaQuery = {
  mobile: `@media (max-width: ${BREAKPOINTS.TABLET - 1}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.TABLET}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.DESKTOP}px)`,
  wide: `@media (min-width: ${BREAKPOINTS.WIDE}px)`,
  custom: (minWidth: number) => `@media (min-width: ${minWidth}px)`
};