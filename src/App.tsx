import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  height: 100vh;
  color: var(--header);
`;

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <Container>
      <button onClick={() => setCount((prev) => prev + 1)}>Counter</button>
      <p>{count}</p>
    </Container>
  );
};

export default App;
