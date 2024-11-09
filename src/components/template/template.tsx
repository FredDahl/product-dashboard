// template.tsx
import { useState } from 'react'
// Styled Components
import { Container } from './templateStyle'

function Template() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <h1>Template</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          </button>
      </Container>
    </>
  )
}

export default Template
