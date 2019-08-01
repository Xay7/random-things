import React from "react";
import styled from "@emotion/styled";
import Spinner from "./Spinner";

const Btn = styled.button<{ load?: boolean }>`
  position: relative;
  width: 50%;
  height: 45px;
  color: white;
  font-size: 18px;
  background-color: rebeccapurple;
  border: none;
  border-radius: 25px;
  outline: none;
  display: block;
  margin: 20px auto;
  transition: transform 150ms ease;

  &:hover {
    cursor: ${props => (props.load ? "not-allowed" : "pointer")};
  }
`;

interface Props {
  onClick: () => any;
  loading?: boolean;
}

const Button: React.FC<Props> = props => {
  return (
    <Btn
      type="button"
      onClick={props.onClick}
      load={props.loading}
      disabled={props.loading ? props.loading : false}>
      {props.loading ? <Spinner /> : "Roll"}
    </Btn>
  );
};

export default Button;
