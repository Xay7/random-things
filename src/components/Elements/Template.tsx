import React from "react";
import styled from "@emotion/styled";
import Button from "../UI/Button";

interface Props {
  result: React.ReactNode;
  settings: React.ReactNode;
  onClick: () => any;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Result = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Settings = styled.div`
  height: 300px;
  width: 100%;
`;

const Template: React.FC<Props> = props => {
  return (
    <Container>
      <Result>{props.result}</Result>
      <Settings>
        {props.settings} <Button onClick={props.onClick} />
      </Settings>
    </Container>
  );
};

export default Template;
