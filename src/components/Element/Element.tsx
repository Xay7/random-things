import React from "react";
import styled from "@emotion/styled";

interface Props {
  name: string;
}

const Container = styled.div``;

const Element: React.FC<Props> = props => {
  return <Container />;
};

export default Element;
