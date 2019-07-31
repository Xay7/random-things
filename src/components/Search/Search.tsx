import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = styled.input`
  box-sizing: border-box;
  height: 45px;
  width: 300px;
  border-radius: 0 25px 25px 0px;
  border: 1px solid #d0d0d0;
  border-left: 0px;
  font-size: 14px;
  outline: none;
`;

const Container = styled.div`
  display: flex;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #d0d0d0;
`;

const IconContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid #d0d0d0;
  border-right: 0px;
  border-radius: 25px 0px 0px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`;

interface Props {
  onChange: Function;
}

const Search: React.FC<Props> = props => {
  return (
    <Container>
      <IconContainer>
        <Icon icon="search" />
      </IconContainer>
      <Input
        type="text"
        onChange={e => props.onChange(e)}
        placeholder="Search"
        onFocus={e => (e.target.placeholder = "")}
        onBlur={e => (e.target.placeholder = "Search")}
      />
    </Container>
  );
};

export default Search;
