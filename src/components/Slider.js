import React, { useState, useRef } from "react";
import styled from "styled-components";

const PERCENT = [1, 25, 50, 75, 100];

export default function Slider() {
  const [value, setValue] = useState(0);

  const inputRef = useRef();

  const onSlideBar = () => {
    setValue(inputRef.current.value);
  };
  return (
    <Container>
      <Title>3. Slider</Title>
      <ValueBox>
        <Value>{value}</Value>
        <ValuePercent>%</ValuePercent>
      </ValueBox>

      <ValueBarContainer>
        <SlideInput
          type="range"
          min="0"
          max="100"
          ref={inputRef}
          onInput={onSlideBar}
          value={value}
        />
        <ButtonContainer>
          {PERCENT.map((el) => (
            <Button onClick={() => setValue(el)}>{el}%</Button>
          ))}
        </ButtonContainer>
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
  width: 330px;
  margin-top: 30px;
`;

const Button = styled.div`
  width: 30px;
  background-color: lightgrey;
  border-radius: 10px;
  font-size: 10px;
  padding: 3px;
  text-align: center;
  color: gray;
  :hover {
    background-color: #6ebfb8;
    color: white;
  }
`;

const SlideInput = styled.input`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* background-color: yellow; */
`;
