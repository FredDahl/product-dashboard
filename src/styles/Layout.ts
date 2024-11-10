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
    MIN: '280px',
    MAX: '500px',
    CONTAINER_MAX: '1280px'
  } as const;
  
  // Z-index stack
  export const Z_INDEX = {
    MODAL: 1000
  } as const;