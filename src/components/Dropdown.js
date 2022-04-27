import React, { useState, useRef } from "react";
import styled from "styled-components";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";

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

export default function Dropdown() {
  const inputRef = useRef();
  const [itemList, setItemList] = useState(SELECT_ITEM);
  const [selectedItem, setSelectedItem] = useState(SELECT_ITEM[0].name);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onFilterItemList = () => {
    setItemList(
      [...SELECT_ITEM].filter((item) =>
        item.name.toLowerCase().includes(inputRef.current.value.toLowerCase())
      )
    );
  };

  return (
    <Container>
      <Title>5. Dropdown</Title>
      <DropdownContainer>
        <DropdownSelectContainer>
          <DropdownSelect onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedItem}
          </DropdownSelect>
          <IconContainer>
            <AiFillCaretDown size={16} color={"black"} />
          </IconContainer>
        </DropdownSelectContainer>

        {isDropdownOpen ? (
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
                    setIsDropdownOpen(false);
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
  margin-bottom: 50px;
  height: 500px;
`;

const Title = styled.h2``;

const DropdownContainer = styled.div`
  width: 330px;
`;

const DropdownSelectContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const DropdownSelect = styled.div`
  width: 100%;
  margin-bottom: 5px;
  padding: 15px;
  font-size: 14px;
  border: 1px solid lightgray;
  border-radius: 3px;
  cursor: pointer;
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
  margin: 0 10px;
`;

const DropdownSearchInput = styled.input`
  width: 100%;
  padding: 15px 30px;
  border: 1px solid lightgray;
  border-radius: 3px;
  outline: none;
`;

const DropdownItemsContainer = styled.div`
  width: 330px;
  height: 200px;
  border: 1px solid lightgray;
  border-radius: 3px;
  overflow: auto;
  cursor: pointer;
`;
