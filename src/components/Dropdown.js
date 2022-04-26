import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export default function Dropdown() {
  const SELECT_ITEM = [
    { id: 1, name: "Javascript" },
    { id: 2, name: "Typescript" },
    { id: 3, name: "C++" },
    { id: 4, name: "C#" },
    { id: 5, name: "Vue" },
    { id: 6, name: "Python" },
    { id: 7, name: "Java" },
    { id: 8, name: "Php" },
    { id: 9, name: "Swift" },
    { id: 10, name: "Kotlin" },
    { id: 11, name: "SQL" },
  ];
  const inputRef = useRef();
  const [itemList, setItemList] = useState(SELECT_ITEM);
  const [selectedItem, setSelectedItem] = useState(SELECT_ITEM[0].name);
  const [isSelected, setIsSelected] = useState(false);

  const onFilterItemList = () => {
    setItemList(
      [...SELECT_ITEM].filter((item) =>
        item.name.includes(inputRef.current.value)
      )
    );
  };

  return (
    <Container>
      <Title>5. Dropdown</Title>
      <DropdownContainer>
        <DropdownSelect onClick={() => setIsSelected(!isSelected)}>
          {selectedItem}
        </DropdownSelect>
        {isSelected ? (
          <>
            <DropdownSearchInputContainer>
              <IconContainer>
                <AiOutlineSearch size={16} color={"gray"} />
              </IconContainer>
              <DropdownSearchInput
                ref={inputRef}
                onChange={onFilterItemList}
                placeholder="Search Symbol"
              ></DropdownSearchInput>
            </DropdownSearchInputContainer>
            <DropdownItemsContainer>
              {itemList.map((item) => (
                <DropdownOption
                  onClick={() => {
                    setIsSelected(false);
                    setSelectedItem(item.name);
                  }}
                  key={item.id}
                  value={item.name}
                >
                  {item.name}
                </DropdownOption>
              ))}
            </DropdownItemsContainer>
          </>
        ) : null}
      </DropdownContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  height: 500px;
`;

const Title = styled.h2``;

const DropdownContainer = styled.div`
  width: 300px;
`;

const DropdownSelect = styled.div`
  width: 100%;
  padding: 15px;
  border: 1px solid lightgray;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 5px;
`;

const DropdownOption = styled.option`
  padding: 10px 30px;
  font-size: 13px;
  :hover {
    background-color: #f2f2f2;
  }
`;

const DropdownSearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
`;

const IconContainer = styled.div`
  position: absolute;
  margin-left: 10px;
`;

const DropdownSearchInput = styled.input`
  padding: 15px 30px;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 3px;
  width: 100%;
`;

const DropdownItemsContainer = styled.div`
  height: 200px;
  overflow: auto;
  border: 1px solid lightgray;
  border-radius: 3px;
  cursor: pointer;
  width: 330px;
`;
