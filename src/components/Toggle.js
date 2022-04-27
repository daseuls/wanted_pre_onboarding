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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Title = styled.h2``;

const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 2px;
  background-color: lightgray;
  border-radius: 50px;
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
  color: ${(props) => (props.isSelected ? "black" : "gray")};
  font-size: 13px;
`;

const ToggleSlider = styled.div`
  position: absolute;
  width: 150px;
  height: 90%;
  border-radius: 50px;
  background-color: white;
  transform: ${(props) => (props.isSelected ? null : "translateX(100%)")};
  transition: all ease 0.3s;
`;
