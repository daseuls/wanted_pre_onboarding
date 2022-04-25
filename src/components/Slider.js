import React, { useState } from "react";
import styled from "styled-components";

export default function Slider() {
  const [value, setValue] = useState(0);
  return (
    <Container>
      <Title>3. Slider</Title>
      <ValueBox>
        <Value>{value}</Value>
        <ValuePercent>%</ValuePercent>
      </ValueBox>

      <ValueBarContainer>
        <SlideBar></SlideBar>
        <Slide></Slide>
      </ValueBarContainer>
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

const Value = styled.p`
  font-weight: 700;
`;

const ValueBox = styled.div`
  display: flex;
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 5px 20px;
  justify-content: flex-end;
  align-items: center;
`;

const ValuePercent = styled.p`
  font-size: 13px;
  color: gray;
  font-weight: 700;
  margin-left: 10px;
`;

const ValueBarContainer = styled.div`
  width: 320px;
`;

const SlideBar = styled.div`
  width: 100%;
  background-color: red;
  height: 2px;
`;

const Slide = styled.div``;
