import React from "react";
import styled from "styled-components";

export default function Dropdown() {
  return (
    <Container>
      <Title>5. Dropdown.js</Title>
      <DropdownContainer></DropdownContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const Title = styled.h2``;

const DropdownContainer = styled.div``;
