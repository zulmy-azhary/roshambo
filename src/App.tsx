import styled from "styled-components";
import { Footer, Main, Navbar } from "./components";
import { ResultProvider, SelectedProvider } from "./context";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  row-gap: 1rem;
  height: 100vh;
  color: var(--header);
  padding: 2rem;
  
  @media (min-width: ${props => props.theme.media.desktop}) {
    padding: 3.5rem 2rem 2rem;
  }
`;

const App: React.FC = () => {
  return (
    <Container>
      <ResultProvider>
        <Navbar />
        <SelectedProvider>
          <Main />
        </SelectedProvider>
        <Footer />
      </ResultProvider>
    </Container>
  );
};

export default App;
