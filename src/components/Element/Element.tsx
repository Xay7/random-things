import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  name: string;
  icon: any;
  color: string;
}

const Container = styled.div`
  height: 150px;
  width: 150px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
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
  color: ${props => props.color};
  margin-bottom: 20px;
  font-size: 45px;
`;

const Text = styled.h3`
  color: ${props => props.color};
  font-size: 18px;
  margin: 0;
`;

const Element: React.FC<Props> = props => {
  return (
    <Container>
      <Icon icon={props.icon} color={props.color} />
      <Text color={props.color}>{props.name}</Text>
    </Container>
  );
};

export default Element;
