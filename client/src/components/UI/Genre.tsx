import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  box-sizing: border-box;
  width: max-content;
  height: 30px;
  padding: 10px;
  background-color: rebeccapurple;
  display: flex;
  align-items: center;
  border-radius: 25px;
  margin-right: 5px;
`;

const Text = styled.p`
  font-size: 12px;
  color: white;
  margin: 0;
`;

const Genre: React.FC = props => {
  return (
    <Container>
      <Text>{props.children}</Text>
    </Container>
  );
};

export default Genre;
