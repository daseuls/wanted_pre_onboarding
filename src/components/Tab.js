import React, { useState } from "react";
import styled from "styled-components";

const MENU = ["감자", "고구마", "카레라이스"];

export default function Tab() {
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <Container>
      <Title>2. Tab</Title>
      <TabContainer>
        <MenuContainer>
          {MENU.map((el, index) => (
            <MenuTitle
              onClick={() => setItemIndex(index)}
              isSelected={itemIndex === index}
              itemLength={100 / MENU.length}
            >
              {el}
            </MenuTitle>
          ))}
        </MenuContainer>
        <TabBarContainer>
          <TabBar></TabBar>
          <TabSlider
            itemIndex={itemIndex}
            itemLength={100 / MENU.length}
          ></TabSlider>
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
  width: 400px;
`;

const MenuTitle = styled.div`
  width: ${(props) => props.itemLength}%;
  justify-content: center;
  display: flex;
  padding: 15px;
  font-size: 14px;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "black" : "gray")};
  font-weight: 700;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
`;

const TabBarContainer = styled.div`
  position: relative;
  width: 100%;
`;

const TabBar = styled.div`
  width: 100%;
  height: 2.5px;
  background-color: lightgray;
`;

const TabSlider = styled.div`
  position: absolute;
  height: 2.5px;
  top: 0;
  background-color: #6ebfb8;
  width: ${(props) => props.itemLength}%;
  transform: translateX(${(props) => props.itemIndex * 100}%);
  transition: all 0.3s ease;
`;
