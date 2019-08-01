import React, { useState } from "react";
import styled from "@emotion/styled";
import Search from "../Search/Search";
import { data } from "./data";
import Element from "../Element/Element";

const ElementsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Header = styled.header`
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

  const elementsList = elements.map(el => {
    return <Element name={el.name} icon={el.icon} key={el.name} />;
  });

  return (
    <div>
      <Header>
        <Search onChange={handleChange} />
      </Header>
      <ElementsContainer>{elementsList}</ElementsContainer>
    </div>
  );
};

export default Main;
