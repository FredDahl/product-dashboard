// Layout.ts
// Device sizes in pixels
export const BREAKPOINTS = {
    MOBILE: 480,
    TABLET: 768,
    DESKTOP: 1024,
    WIDE: 1280
  } as const;
  
  // Content width constraints
  export const CONTENT_WIDTH = {
    // MIN & MAX used for mobile and tablet
    MIN: '280px',
    MAX: '500px',
    // Used for desktop
    CONTAINER_MAX: '1280px',
    SIDEBAR_WIDTH: '300px',
    MAIN_CONTENT_MIN: '600px'
  } as const;
  
  // Z-index stack
  export const Z_INDEX = {
    MODAL: 1000
  } as const;
  
  export type LayoutMode = 'compact' | 'expanded';
  
  export const LAYOUT = {
    GRID: {
      PRODUCTS: {
        COLUMNS_DESKTOP: 2,
        GAP: '24px',
        SIDEBAR_GAP: '32px'
      }
    }
  } as const;