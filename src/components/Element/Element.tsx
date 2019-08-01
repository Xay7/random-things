import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  icon: any;
}

const Container = styled.div`
  height: 150px;
  width: 150px;
  border: 1px solid rebeccapurple;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  transition: all 150ms ease;

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  color: rebeccapurple;
  margin-bottom: 20px;
  font-size: 45px;
`;

const Text = styled.h3`
  color: rebeccapurple;
  font-size: 18px;
  margin: 0;
`;

const Element: React.FC<Props> = props => {
  return (
    <Link to={props.name.toLowerCase()} style={{ textDecoration: "none" }}>
      <Container>
        <Icon icon={props.icon} />
        <Text>{props.name}</Text>
      </Container>
    </Link>
  );
};

export default Element;
