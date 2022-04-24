import styled from "styled-components";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";

function App() {
  return (
    <Container>
      <Toggle />
      <Tab />
    </Container>
  );
}

export default App;

const Container = styled.div``;
