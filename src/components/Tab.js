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
              key={index}
              onClick={() => setItemIndex(index)}
              isSelected={itemIndex === index}
              itemLength={100 / MENU.length}
            >
              {el}
            </MenuTitle>
          ))}
        </MenuContainer>
        <TabBarContainer>
          <TabBar />
          <TabSlider itemIndex={itemIndex} itemLength={100 / MENU.length} />
        </TabBarContainer>
      </TabContainer>
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

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const MenuTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  width: ${(props) => props.itemLength}%;
  color: ${(props) => (props.isSelected ? "black" : "gray")};
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
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
  top: 0;
  width: ${(props) => props.itemLength}%;
  height: 2.5px;
  background-color: #6ebfb8;
  transform: translateX(${(props) => props.itemIndex * 100}%);
  transition: all 0.3s ease;
`;
