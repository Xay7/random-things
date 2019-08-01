import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

const animation = keyframes`
     100% {
    transform: rotate(360deg);
  }
`;

const SpinToWin = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  border-top-color: white;
  opacity: 1;
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  width: 16px;
  height: 16px;
  transition: opacity 250ms;
  animation: ${animation} 1s linear;
  animation-iteration-count: infinite;
`;

const Spinner: React.FC = () => {
  return <SpinToWin />;
};

export default Spinner;
