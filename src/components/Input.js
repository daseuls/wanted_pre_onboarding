import React, { useState } from "react";
import styled from "styled-components";
import {
  AiFillCheckCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const [isPwVisible, setIsPwVisible] = useState(false);
  const [isAbleEmail, setIsAbleEmail] = useState(true);

  const checkEmailValidation = (email) => {
    const validation =
      /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    return validation.test(email);
  };

  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <Title>4. Input</Title>
      <SubContainer>
        <InputWrapper>
          <InputTitle>E-mail</InputTitle>
          <InputContainer>
            <InputTarget
              onChange={onChangeInputValue}
              placeholder="E-mail"
              onBlur={() => setIsAbleEmail(checkEmailValidation(inputValue))}
            ></InputTarget>
            <IconContainer>
              <AiFillCheckCircle
                size={18}
                color={
                  checkEmailValidation(inputValue) ? "#6ebfb8" : "lightgray"
                }
              />
            </IconContainer>
          </InputContainer>
          {isAbleEmail ? null : (
            <WarningText>Invalid e-mail address.</WarningText>
          )}
        </InputWrapper>
        <InputWrapper>
          <InputTitle>Password</InputTitle>
          <InputContainer>
            <InputTarget
              placeholder="Password"
              type={isPwVisible ? "type" : "password"}
            ></InputTarget>
            <IconContainer onClick={() => setIsPwVisible(!isPwVisible)}>
              {isPwVisible ? (
                <AiFillEye size={20} color={"#6ebfb8"} />
              ) : (
                <AiFillEyeInvisible size={20} color={"lightgray"} />
              )}
            </IconContainer>
          </InputContainer>
        </InputWrapper>
      </SubContainer>
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

const SubContainer = styled.div`
  width: 300px;
  cursor: pointer;
`;

const InputTitle = styled.p`
  margin: 1px 3px;
  color: gray;
  font-size: 12px;
`;

const InputTarget = styled.input`
  width: 100%;
  padding: 12px 10px;
  background-color: #f2f2f2;
  border: 1px lightgray solid;
  border-radius: 3px;
  outline: none;

  :focus {
    border: 1px gray solid;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

const IconContainer = styled.div`
  position: absolute;
  margin-right: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const WarningText = styled.p`
  color: red;
  font-size: 12px;
`;
