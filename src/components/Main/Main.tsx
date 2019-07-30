import React, { useState } from "react";
import styled from "@emotion/styled";
import Search from "../Search/Search";
import { data } from "./data";
import Element from "../Element/Element";

const Container = styled.main`
  margin: 0 auto;
  width: 70vw;
  height: 100vh;
  background-color: rebeccapurple;
`;

const Main: React.FC = props => {
  const [elements, setElements] = useState(data);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedElements = elements.filter(el => {
      if (el.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return el;
      }
    });
    return updatedElements;
  };

  return (
    <Container>
      <Search onChange={handleChange} />
      {elements.map(el => {
        return <Element name={el.name} />;
      })}
    </Container>
  );
};

export default Main;
