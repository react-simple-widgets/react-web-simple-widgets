import styled from "styled-components";

type StyledProgressBarWrapperProps = {
    barHeight?: string | number,
    backgroundColor?: string,
};
export const StyledProgressBarWrapper = styled.div<StyledProgressBarWrapperProps>`
  width: 100%;
  height: ${(props) => props.barHeight};
  background-color: ${(props) => props.backgroundColor};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
`;

type StyledProgressBarProps = {
    barHeight?: string | number,
    fillColor?: string,
};
export const StyledProgressBar = styled.div<StyledProgressBarProps>`
  height: ${(props) => props.barHeight};
  width: 100%;
  background-color: ${(props) => props.fillColor};
  position: absolute;
  top: 0;
  left: 0;
  transform: scaleX(0);
  transform-origin: 0;
`;
