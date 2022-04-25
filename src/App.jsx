import styled from "styled-components";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import Input from "./components/Input";

function App() {
  return (
    <Container>
      <Toggle />
      <Tab />
      <Slider />
      <Input />
    </Container>
  );
}

export default App;

const Container = styled.div``;
