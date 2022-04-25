import styled from "styled-components";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";

function App() {
  return (
    <Container>
      <Toggle />
      <Tab />
      <Slider />
    </Container>
  );
}

export default App;

const Container = styled.div``;
