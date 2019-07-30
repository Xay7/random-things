import React from "react";
import styled from "@emotion/styled";

const Input = styled.input``;

interface Props {
  onChange: Function;
}

const Search: React.FC<Props> = props => {
  return <Input type="text" onChange={e => props.onChange(e)} />;
};

export default Search;
