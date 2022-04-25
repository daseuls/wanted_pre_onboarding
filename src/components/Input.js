import React from "react";
import styled from "styled-components";

export default function Input() {
  return (
    <Container>
      <Title>4. Input</Title>
      <InputContainer>
        <InputTitle>E-mail</InputTitle>
        <Input></Input>
      </InputContainer>
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

const InputContainer = styled.div``;

// const Input = styled.input``;

const InputTitle = styled.p``;
