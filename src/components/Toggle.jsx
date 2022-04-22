import React, { useState } from "react";
import styled from "styled-components";

export default function Toggle() {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <Container>
      <Title>1. Toggle</Title>
      <ToggleContainer>
        <ToggleBtn isSelected={isSelected} onClick={() => setIsSelected(true)}>
          기본
        </ToggleBtn>
        <ToggleBtn
          isSelected={!isSelected}
          onClick={() => setIsSelected(false)}
        >
          상세
        </ToggleBtn>
      </ToggleContainer>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h2``;

const ToggleContainer = styled.div`
  border-radius: 50px;
  background-color: lightgray;
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

const ToggleBtn = styled.button`
  width: 100px;
  margin: 2px;
  padding: 8px;
  font-weight: 700;
  color: ${(props) => (props.isSelected ? "black" : "gray")};
  background-color: ${(props) => (props.isSelected ? "white" : "lightgray")};
  border: none;
  border-radius: 50px;
`;
