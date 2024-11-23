// App.tsx
import ProductListInterface from './components/productListInterface/ProductListInterface'
// Styled Components
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
// CSS
import './App.css'

function App() {

  return (
    <ThemeProvider theme={theme}>
    <div className="container">
      <ProductListInterface />
    </div>
  </ThemeProvider>
  )
}

export default App
