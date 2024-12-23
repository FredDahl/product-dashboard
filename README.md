# Product Dashboard
A React TypeScript application featuring a responsive product management interface with
filtering capabilities and styled-components for styling.

## Features
- Add, edit, and delete products
- Filter products by:
  - Category (dropdown)
  - Name (search)
  - Maximum price
- Responsive design with mobile-first approach
- Dark theme UI with consistent styling
- Custom styled form inputs and modals

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/FredDahl/product-dashboard.git
```
2. Navigate to the project directory:
```bash
cd product-dashboard
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev
```

The application will start on `http://localhost:5173`

## Project Structure

src/
├── components/
│ ├── addProduct/
│ ├── productListInterface/
│ └── productListItem/
├── styles/
│ ├── Layout.ts # Layout constants
│ ├── MediaQueries.ts # Media query utilities
│ ├── Theme.ts # Theme configuration
│ └── SharedStyledComponents.ts
├── interfaces/
└── App.tsx


## Styling System

### Theme
The application uses styled-components with ThemeProvider for consistent styling across components. Theme variables are accessed through props for colors, spacing, and border-radius.

### Breakpoints
Media queries are handled using the `mediaQuery` utility in `MediaQueries.ts`. This utility provides a consistent way to handle different screen sizes.
MOBILE: < 768px
TABLET: ≥ 768px
DESKTOP: ≥ 1024px
WIDE: ≥ 1280px

### Media Queries
Uses the mediaQuery utility for consistent responsive design.


### Shared Components
The application provides base styled components for consistent form elements:
- BaseInput: Styled input with hover and focus states
- BaseTextArea: Styled textarea with custom scrollbar
- BaseSelect: Styled select with consistent appearance
- BaseButton: Styled button with theme-aware colors

## Component Examples

### Filter Interface
The application includes a filter interface with:
- Category dropdown
- Name search input
- Maximum price input with number validation

### Product List
Products are displayed in a responsive grid with:
- Consistent width constraints
- Responsive padding and margins
- Modal support for edit/delete operations