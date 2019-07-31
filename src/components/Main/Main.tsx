import React, { useState } from "react";
import styled from "@emotion/styled";
import Search from "../Search/Search";
import { data } from "./data";
import Element from "../Element/Element";

const Container = styled.main`
  margin: 0 auto;
  width: 65vw;
  height: 100vh;
`;

const ElementsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  margin: 40px 0;
`;

const Main: React.FC = props => {
  const [elements, setElements] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedElements = data.filter(el => {
      return el.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    return setElements(updatedElements);
  };

  return (
    <Container>
      <Header>
        <Search onChange={handleChange} />
      </Header>
      <ElementsContainer>
        {elements.map(el => {
          console.log(el.category);
          let color: string = "black";
          switch (el.category) {
            case "Entertainment":
              color = "#2980b9";
              break;
            case "Math":
              color = "#e74c3c";
              break;
          }
          return (
            <Element
              name={el.name}
              icon={el.icon}
              color={color}
              key={el.name}
            />
          );
        })}
      </ElementsContainer>
    </Container>
  );
};

export default Main;
