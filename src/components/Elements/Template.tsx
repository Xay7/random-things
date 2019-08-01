import React from "react";
import styled from "@emotion/styled";
import Button from "../UI/Button";

interface Props {
  result: React.ReactNode;
  settings: React.ReactNode;
  onClick: () => any;
  loading: boolean;
}

const Container = styled.div`
  height: 400px;
  margin: 50px 0;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  background-color: #f8f8f8;
`;

const Result = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Settings = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  align-self: flex-end;
  width: 100%;
`;

const Template: React.FC<Props> = props => {
  return (
    <Container>
      <Settings>
        {props.settings}
        <ButtonContainer>
          <Button onClick={props.onClick} loading={props.loading} />
        </ButtonContainer>
      </Settings>
      <Result>{props.result}</Result>
    </Container>
  );
};

export default Template;
