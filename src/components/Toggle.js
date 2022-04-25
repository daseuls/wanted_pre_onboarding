import React, { useState } from "react";
import styled from "styled-components";

export default function Toggle() {
  const [isSelected, setIsSelected] = useState(true);
  return (
    <Container>
      <Title>1. Toggle</Title>
      <ToggleContainer>
        <ToggleSlider isSelected={isSelected}></ToggleSlider>
        <ToggleBtn onClick={() => setIsSelected(true)}>
          <ToggleTitle isSelected={isSelected}>기본</ToggleTitle>
        </ToggleBtn>
        <ToggleBtn onClick={() => setIsSelected(false)}>
          <ToggleTitle isSelected={!isSelected}>상세</ToggleTitle>
        </ToggleBtn>
      </ToggleContainer>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h2``;

const ToggleContainer = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  border-radius: 50px;
  background-color: lightgray;
  overflow: auto;
  padding: 0 2px;
`;

const ToggleBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 100%;
  font-weight: 700;
  z-index: 10;
`;

const ToggleTitle = styled.p`
  font-size: 13px;
  color: ${(props) => (props.isSelected ? "black" : "gray")};
`;

const ToggleSlider = styled.div`
  position: absolute;
  transform: ${(props) => (props.isSelected ? null : "translateX(100%)")};
  width: 150px;
  height: 90%;
  transition: all ease 0.3s;
  border-radius: 50px;
  background-color: white;
`;
