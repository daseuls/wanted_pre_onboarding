import React from "react";
import styled from "styled-components";

export default function Tab() {
  const MENU = ["감자", "고구마", "카레라이스"];
  return (
    <Container>
      <Title>2. Tab</Title>
      <TabContainer>
        <MenuContainer>
          {MENU.map((el) => (
            <MenuTitle>{el}</MenuTitle>
          ))}
        </MenuContainer>
        <TabBarContainer>
          <TabBar></TabBar>
          <TabSlider></TabSlider>
        </TabBarContainer>
      </TabContainer>
    </Container>
  );
}

const Container = styled.div``;

const Title = styled.h2``;

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuTitle = styled.p``;

const MenuContainer = styled.div`
  display: flex;
`;

const TabBarContainer = styled.div`
  width: 300px;
  /* height: 10px; */
  /* background-color: red; */
`;

const TabBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: gray;
`;

const TabSlider = styled.div``;
