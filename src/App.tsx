import styled from "styled-components";
import { Footer, Main, Navbar } from "./components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  height: 100vh;
  color: var(--header);
  padding: 3.5rem 2rem 2rem;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
