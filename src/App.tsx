// App.tsx
import ProductList from './components/productListInterface/ProductListInterface'
// Styled Components
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/Theme';
// CSS
import './App.css'

function App() {

  return (
    <ThemeProvider theme={theme}>
    <div className="container">
      <ProductList />
    </div>
  </ThemeProvider>
  )
}

export default App
