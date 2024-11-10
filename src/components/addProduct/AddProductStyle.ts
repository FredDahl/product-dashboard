import styled from 'styled-components';

export const AddProductContainer = styled.div`
  width: 100%;
  max-width: 500px;
  // margin: 20px auto;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  input, textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    min-height: 100px;
  }
`;