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
  margin-bottom: 100px;
`;

const Title = styled.h2``;

const Value = styled.p`
  font-weight: 700;
`;

const ValueBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 20px;
  width: 300px;
  background-color: #f9f9f9;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const ValuePercent = styled.p`
  margin-left: 10px;
  color: gray;
  font-weight: 700;
  font-size: 13px;
`;

const ValueBarContainer = styled.div`
  width: 330px;
  margin-top: 30px;
`;

const Button = styled.div`
  width: 30px;
  padding: 3px;
  text-align: center;
  font-size: 10px;
  color: gray;
  background-color: lightgrey;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    color: white;
    background-color: #6ebfb8;
  }
`;

const SlideInput = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 0;
  cursor: pointer;

  -webkit-appearance: none;

  ::-webkit-slider-runnable-track {
    width: 300px;
    height: 6px;
    background: linear-gradient(
      90deg,
      #6ebfb8 0%,
      #6ebfb8 ${(props) => props.value}%,
      white ${(props) => props.value}%
    );
    border: 1px solid lightgray;
    border-radius: 3px;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -7px;
    background: #6ebfb8;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2.5px solid white;
    box-shadow: 0px 1px 3px gray;
    cursor: pointer;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
